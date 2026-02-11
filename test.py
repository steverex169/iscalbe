#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os, time, random, zipfile, logging, tempfile, re, requests
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from datetime import datetime
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')


# ================== LOGGING ==================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)

def log(*args):
    print(*args, flush=True)
import json
import os
import requests

PLACE_URL_BASE = "http://72.52.240.29:9000/api/v1/bets/place"
PUBLIC_KEY = "B144C74C-89FD-4767-9756-76034DB71D1F"
SECRET_KEY = "BD9FBD5A00A83203C64238227B3349EE"

HEADERS = {
    "Content-Type": "application/json",
    "X-Public-Key": PUBLIC_KEY,
    "X-Secret-Key": SECRET_KEY
}

BETS_FILE = "bets.json"

# Load already sent bets from file
# Load already sent bets
def load_sent_bets():
    if not os.path.exists(BETS_FILE):
        return [], set()
    try:
        data = json.load(open(BETS_FILE))
        tickets = {b['ticket'] for b in data}
        return data, tickets  # full objects, and set of ticket ids
    except Exception as e:
        print("[LOAD BETS ERROR]", e)
        return [], set()

def normalize_player(p):
    return p.lower().strip()


# Save updated bets
def save_sent_bets(sent_bets):
    try:
        with open(BETS_FILE, "w", encoding="utf-8") as f:
            json.dump(sent_bets, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print("[SAVE BETS ERROR]", e)

def clean_num(v):
    if isinstance(v, float) and v.is_integer():
        return int(v)
    return v

# ================== INIT ==================
processed_bets, sent_ticket_ids = load_sent_bets()
log(f"[INIT] loaded {len(processed_bets)} bets, {len(sent_ticket_ids)} unique tickets")


# ================== CONFIG ==================
try:
    with open("config.json", "r") as f:
        CONFIG = json.load(f)
except Exception as e:
    print("[CONFIG LOAD ERROR]", e)
    CONFIG = {}

RULES = CONFIG.get("rules", {})

# ================== LIVE / DRY FLAG ==================
# Inverse logic: if live_mode=True in config, we want dry-run
# if live_mode=False in config, we want live
AOS_POST_LIVE = not CONFIG.get("live_mode", False)
print(f"AOS_POST_LIVE = {AOS_POST_LIVE}")


# ================== CONFIG ==================
LOGIN_URL = "https://betwar.com/Logins/039/sites/betwar/index.aspx"
MONITOR_URL = "https://betwar.com/Agent/Monitor2.aspx"

ACCESS_CODE = "spades"
ACCESS_PASS = "PS17$"

SEND_TELEGRAM = True
TG_BOT = '8293134034:AAEBhyhTlXhsYZPR4cd6umve1nTUJz3b4_o'
TG_CHATS = ['6695038579', '1704264194']


def normalize_hours(value):
    """
    - 1–59 => minutes
    - >=60 => minutes converted to hours (60 = 1 hour)
    """
    if value is None:
        return None

    try:
        num = float(value)
    except:
        return None

    if num < 60:
        return num / 60.0  # minutes → hours
    else:
        return num / 60.0  # also minutes → hours (so 60 → 1h, 120 → 2h)



def extract_sport_league(row):
    try:
        el = row.find_element("css selector", "strong.sportleague-value")
        text = el.text.strip()
        if " - " in text:
            sport, league = map(str.strip, text.split(" - ", 1))
        else:
            sport, league = "", text
        return sport, league
    except:
        return "", ""

def expand_row(driver, row):
    try:
        driver.execute_script(
            "arguments[0].scrollIntoView({block:'center'});", row
        )
        ActionChains(driver).move_to_element(row).click().perform()

        # ✅ WAIT for expanded content
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located(
                (By.CLASS_NAME, "wager-side-description")
            )
        )
        return True
    except Exception as e:
        log("[ROW CLICK ERROR]", e)
        return False

def extract_expanded_data(row):
    data = {
        "sport": "",
        "league": "N/A",
        "scheduled": "N/A",
        "selection": "N/A",
    }

    try:
        detail = row.find_element(By.CLASS_NAME, "wager-side-description")

        # ✅ Sport / League
        sport_text = detail.find_element(
            By.CLASS_NAME, "sportleague-value"
        ).text.strip()

        if " - " in sport_text:
            data["sport"], data["league"] = map(str.strip, sport_text.split(" - ", 1))
        else:
            data["league"] = sport_text

    except:
        pass

    try:
        # ✅ Scheduled
        data["scheduled"] = detail.find_element(
            By.ID, "scheduledDateTime-value"
        ).text.strip()
    except:
        pass

    try:
        # ✅ Selection
        data["selection"] = detail.find_element(
            By.ID, "selection-value"
        ).text.strip()
    except:
        pass

    return data

def apply_line_variance(line, variance):
    """
    Adjust line according to variance:
    - positive line: subtract variance (toward zero)
    - negative line: add variance (toward more negative)
    """
    if line > 0:
        return line - variance
    elif line < 0:
        return line + variance
    else:
        return line

def apply_odds_variance(odds, variance):
    """
    Adjust odds according to variance:
    - positive odds: subtract variance (less payout)
    - negative odds: subtract variance (more negative, more risk)
    """
    if odds > 0:
        return odds - variance
    elif odds < 0:
        return odds - variance
    else:
        return odds



# ================== UTILS ==================
def human_delay(a=0.2, b=0.6):
    time.sleep(random.uniform(a, b))

def safe_text(el, css):
    try:
        return el.find_element(By.CSS_SELECTOR, css).text.strip()
    except:
        return ""

def safe_find_text(el, css):
    try:
        return el.find_element(By.CSS_SELECTOR, css).text.strip()
    except:
        return None

def normalize_player(player_text):
    return player_text.split("(")[0].strip().lower()


def normalize_sport(sport, league):
    return f"{sport.lower()} - {league.lower()}"


def infer_game_type(selection):
    if not selection:
        return None
    s = selection.lower()
    if re.search(r"\b(total|game total|over/under|totals)\b", s):
        return "total"
    if re.search(r"\b(spread|line)\b", s):
        return "spread"
    if re.search(r"\b(money|moneyline)\b", s):
        return "moneyline"
    return None



def parse_line(line):
    try:
        return float(line.replace("+", "").replace("½", ".5"))
    except:
        return 0.0

def parse_odds(odds):
    try:
        return int(odds.replace("+", "").strip())
    except:
        return 0

def place_live_bet(bet):
    payload = {
        "player": bet["player"],
        "sport": bet["sport"],
        "league": bet["league"],
        "selection": bet["selection"],
        "team": bet["team"],
        "rotation": bet["rotation"],
        "line": bet["line"],
        "odds": bet["odds"],
        "risk": bet["risk_win"].split("/")[0],
        "win": bet["risk_win"].split("/")[1],
        "scheduled": bet["scheduled"]
    }

    try:
        resp = requests.post(PLACE_URL_BASE, headers=HEADERS, json=payload, timeout=10)
        if resp.status_code == 200:
            data = resp.json()
            print(f"✅ Bet placed successfully: {data}")
            return True, data
        else:
            print(f"❌ Failed to place bet: {resp.status_code} {resp.text}")
            return False, resp.text
    except Exception as e:
        print("❌ Exception placing bet:", e)
        return False, str(e)
        
def passes_rules(bet):
    player = normalize_player(bet["player"])
    sport_key = normalize_sport(bet["sport"], bet["league"])
    game_type = infer_game_type(bet["selection"])

    if player not in RULES:
        return False, f"Player not allowed: {player}"

    if sport_key not in RULES[player]:
        return False, f"Sport not allowed: {sport_key}"

    game_types = RULES[player][sport_key]["game_types"]
    if not game_type or game_type not in game_types:
        return False, f"Game type not allowed: {game_type}"

    rule = game_types[game_type]

    # ================= TIME RESTRICTION =================
    allowed_hours = rule.get("time_restriction")  # Optional: Time range for the bet
    if allowed_hours:
        current_hour = datetime.now().hour
        current_minute = datetime.now().minute

        start_hour, end_hour = allowed_hours
        start_hour, end_hour = int(start_hour.split(":")[0]), int(end_hour.split(":")[0])

        # Handling the time range from 10 PM to 9 AM
        # Case where time window crosses midnight
        if start_hour > end_hour:
            in_window = current_hour >= start_hour or current_hour < end_hour
        else:
            in_window = start_hour <= current_hour < end_hour

        if not in_window:
            return False, (
                f"⛔ Time restriction, skipping | "
                f"allowed hours {start_hour}:00–{end_hour}:00, "
                f"current time {current_hour}:{current_minute:02d}"
            )

    # 🕒 Schedule check
    value_hours = normalize_hours(rule.get("value"))
    if value_hours is not None:
        try:
            scheduled_dt = datetime.strptime(
                bet["scheduled"], "%b %d, %Y %I:%M %p"
            )
            now = datetime.now()
            diff_hours = (scheduled_dt - now).total_seconds() / 3600

            if diff_hours <= 0:
                return False, "⛔ Past scheduled time"

            if diff_hours < value_hours:
                return False, f"⛔ Game starts soon, skipping | game starts in {diff_hours:.2f}h (minimum {value_hours}h required)"

        except Exception as e:
            return False, f"Schedule parse error: {e}"

        # 📐 Line variance
    scraped_line = parse_line(bet["line"])
    line_variance = rule.get("line", 0)
    allowed_line = apply_line_variance(scraped_line, line_variance)

    if (scraped_line > 0 and scraped_line < allowed_line) or \
       (scraped_line < 0 and scraped_line > allowed_line):
        return False, f"Line blocked {scraped_line} → allowed {allowed_line}"

    # 💰 Odds variance
    scraped_odds = parse_odds(bet["odds"])
    price_limit = rule.get("price", 0)
    allowed_odds = apply_odds_variance(scraped_odds, price_limit)

    if (scraped_odds > 0 and scraped_odds > allowed_odds) or \
       (scraped_odds < 0 and scraped_odds < allowed_odds):
        return False, f"Odds blocked {scraped_odds} → allowed {allowed_odds}"

    bet["adjusted_line"] = allowed_line
    bet["adjusted_odds"] = allowed_odds

    return True, "PASS"

# ================== TELEGRAM ==================
def send_telegram(msg):
    if not SEND_TELEGRAM:
        return
    url = f"https://api.telegram.org/bot{TG_BOT}/sendMessage"
    for cid in TG_CHATS:
        try:
            requests.post(url, data={"chat_id": cid, "text": msg}, timeout=10)
        except Exception as e:
            log("[TG ERROR]", e)

def format_msg(b):
    return (
        "🎯 NEW BET\n"
        f"Player: {b['player']}\n"
        f"Sport: {b['sport']} - {b['league']}\n"
        f"Selection: {b['selection']}\n"
        f"rotation: {b['rotation']}\n"
        f"Team: {b['team']}\n"
        f"Line: {b['line']}\n"
        f"Odds: {b['odds']}\n"
        f"Risk/Win: {b['risk_win']}\n"
        f"Scheduled: {b['scheduled']}\n"
        f"Taken: {b['taken']}\n"
        "──────────────"
    )
def format_dry_run(bet):
    def fmt(v):
        if isinstance(v, float) and v.is_integer():
            return int(v)
        return v

    line_from = fmt(parse_line(bet['line']))
    line_to   = fmt(bet.get('adjusted_line', line_from))  # <-- use original if missing
    odds_from = fmt(parse_odds(bet['odds']))
    odds_to   = fmt(bet.get('adjusted_odds', odds_from)) # <-- use original if missing

    return (
        f"[DRY RUN] rot={bet['rotation']} | "
        f"line {line_from} -> {line_to} | "
        f"price {odds_from} -> {odds_to}"
    )


# ================== DRIVER ==================
# ================== DRIVER (WITH PROXY SUPPORT) ==================
PROXY_CFG = {
    "host": "geo.iproyal.com",
    "port": "12321",
    "username": "jbg953Ex5efbFWOi",
    "password": "sEtTrh7kMRPvYD5D_country-us_session-fWWCViFT_lifetime-20m_streaming-1_skipispstatic-1"
}

CHROME_BINARY = r"C:\Program Files\Google\Chrome\Application\chrome.exe"  # optional

def create_proxy_extension(proxy_host, proxy_port, username, password):
    plugin_file = "proxy_auth_plugin.zip"
    manifest_json = """
    {
        "version": "1.0.0",
        "manifest_version": 2,
        "name": "Chrome Proxy",
        "permissions": [
            "proxy", "tabs", "unlimitedStorage", "storage",
            "<all_urls>", "webRequest", "webRequestBlocking"
        ],
        "background": { "scripts": ["background.js"] }
    }
    """
    background_js = f"""
    var config = {{
        mode: "fixed_servers",
        rules: {{
            singleProxy: {{
                scheme: "http",
                host: "{proxy_host}",
                port: parseInt({proxy_port})
            }},
            bypassList: ["localhost"]
        }}
    }};
    chrome.proxy.settings.set({{ value: config, scope: "regular" }}, function(){{}});
    
    function cb(details) {{
        return {{
            authCredentials: {{
                username: "{username}",
                password: "{password}"
            }}
        }};
    }}
    chrome.webRequest.onAuthRequired.addListener(cb, {{urls: ["<all_urls>"]}}, ["blocking"]);
    """
    with zipfile.ZipFile(plugin_file, "w") as zp:
        zp.writestr("manifest.json", manifest_json)
        zp.writestr("background.js", background_js)
    return os.path.abspath(plugin_file)


def launch_driver(use_proxy=True):
    log("[BROWSER] launching Chrome…")

    options = uc.ChromeOptions()
    temp_profile = tempfile.mkdtemp(prefix="uc_profile_")
    options.add_argument(f"--user-data-dir={temp_profile}")
    log("[BROWSER] using temporary profile:", temp_profile)

    # Anti-detection flags
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--start-maximized")
    options.add_argument("--window-size=1280,900")

    # Chrome binary if exists
    if CHROME_BINARY and os.path.exists(CHROME_BINARY):
        options.binary_location = CHROME_BINARY

    # Add proxy extension if required
    if use_proxy:
        try:
            ext_path = create_proxy_extension(
                PROXY_CFG["host"], PROXY_CFG["port"],
                PROXY_CFG["username"], PROXY_CFG["password"]
            )
            options.add_extension(ext_path)
            log("[BROWSER] proxy extension added")
        except Exception as e:
            log("[BROWSER] proxy extension error:", e)

    # Launch undetected Chrome
    try:
        uc.TARGET_VERSION = 143  # match your installed Chrome major version
        driver = uc.Chrome(version_main=143, options=options)
        driver.implicitly_wait(10)
        log("[BROWSER] Chrome launched successfully")
        return driver
    except Exception as e:
        log("[BROWSER] launch failed:", e)
        raise

# ================== LOGIN ==================
def login_and_open_monitor(driver):
    log("[NAV] opening login page")
    driver.get(LOGIN_URL)
    time.sleep(5)

    driver.find_element(By.ID, "txtAccessOfCode").send_keys(ACCESS_CODE)
    driver.find_element(By.ID, "txtAccessOfPassword").send_keys(ACCESS_PASS)

    btn = driver.find_element(By.XPATH, "//input[@type='submit']")
    ActionChains(driver).move_to_element(btn).click().perform()

    time.sleep(6)

    log("[NAV] opening Monitor2")
    driver.get(MONITOR_URL)
    time.sleep(5)

    # ================== HUMAN SCROLL SIMULATION ==================
    log("[NAV] simulating reading scrolls before unchecking boxes…")
    for _ in range(random.randint(1, 3)):
        scroll_amt = random.randint(100, 400)
        driver.execute_script(f"window.scrollBy(0, {scroll_amt});")
        human_delay(0.3, 1.0)
        driver.execute_script(f"window.scrollBy(0, -{scroll_amt});")
        human_delay(0.3, 1.0)

    # ================== UNCHECK BET TYPE CHECKBOXES ==================
    checkbox_xpaths = [
        "/html/body/div[2]/form/div[3]/div/div[1]/div[1]/div/div/div/div[2]/label/span",  # Parlays
        "/html/body/div[2]/form/div[3]/div/div[1]/div[1]/div/div/div/div[3]/label/span",  # Reverses
        "/html/body/div[2]/form/div[3]/div/div[1]/div[1]/div/div/div/div[4]/label/span",  # Teasers
        "/html/body/div[2]/form/div[3]/div/div[1]/div[1]/div/div/div/div[5]/label/span",  # If-Bets
    ]

    log("[NAV] unchecking requested bet-type boxes…")
    for i, xpath in enumerate(checkbox_xpaths, start=1):
        try:
            checkbox = driver.find_element(By.XPATH, xpath)
            driver.execute_script(
                "arguments[0].scrollIntoView({block:'center'});", checkbox
            )
            human_delay(0.3, 0.7)

            ActionChains(driver) \
                .move_to_element_with_offset(
                    checkbox,
                    random.uniform(-5, 5),
                    random.uniform(-5, 5)
                ).pause(random.uniform(0.2, 0.5)) \
                .click() \
                .perform()

            log(f"[NAV] unchecked checkbox {i}/{len(checkbox_xpaths)}")
            human_delay(0.4, 0.9)

        except Exception as e:
            log(f"[NAV] checkbox error {i}: {e}")

    log("[NAV] checkbox setup complete")


# ================== ROW PROCESSOR ==================
def process_row(driver, row, idx):
    global processed_bets, sent_ticket_ids

    ticket = row.get_attribute("id").replace("tr-", "")
    if ticket in sent_ticket_ids:
        log(f"[SKIP] Duplicate ticket {ticket}")
        return
    sent_ticket_ids.add(ticket)

    if not expand_row(driver, row):
        return
    human_delay(0.4, 0.7)

    expanded = extract_expanded_data(row)

    player_text = safe_text(row, "td:nth-child(1)")
    risk_win = safe_text(row, "td:nth-child(3)")
    taken = safe_text(row, "td:nth-child(4)")
    player = (
        safe_find_text(row, "span.badge")
        or safe_find_text(row, "td.LineCellMonitorFirstRow")
        or ""
    )
    player = player.split("(")[0].strip()

    log(
        f"[DEBUG] ticket={ticket} "
        f"player='{player or 'N/A'}' "
        f"sport='{expanded.get('sport')}' "
        f"league='{expanded.get('league')}' "
        f"selection='{expanded.get('selection')}'"
    )

    team = safe_find_text(row, "font.TeamNameTicket") or "-"
    line = safe_find_text(row, "font.PointsTicket") or "0"
    odds = safe_find_text(row, "font.OddsTicket") or "100"

    rot_match = re.search(r"\[(\d+)\]", row.text)
    rotation = rot_match.group(1) if rot_match else ticket[-3:]

    sport = expanded.get("sport", "")
    league = expanded.get("league", "")
    if not sport or not league:
        sport, league = extract_sport_league(row)

    bet = {
        "ticket": ticket,
        "player": player,
        "sport": sport,
        "league": league,
        "selection": expanded["selection"],
        "team": team,
        "rotation": rotation,
        "line": line,
        "odds": odds,
        "risk_win": risk_win,
        "taken": taken,
        "scheduled": expanded["scheduled"],
    }

    # ================== RULE CHECK ==================
    msg_prefix = "[DRY RUN]" if not AOS_POST_LIVE else "[LIVE BET]"
    passed, reason = passes_rules(bet)

    if passed:
        # Mark timestamp
        bet["timestamp"] = time.strftime("%Y-%m-%d %H:%M:%S")
        processed_bets.append(bet)
        save_sent_bets(processed_bets)
        send_telegram(format_dry_run(bet))

        # ----------------- MESSAGE PREFIX -----------------

        # ----------------- LIVE BET -----------------
        if AOS_POST_LIVE:
            success, resp = place_live_bet(bet)
            if success:
                send_telegram(f"{msg_prefix} placed successfully\n{format_msg(bet)}")
            else:
                send_telegram(f"{msg_prefix} failed to place\n{format_msg(bet)}\nError: {resp}")
        else:
            # Dry-run TG message
            send_telegram(f"✅ {msg_prefix} (BET PASSED)\n{format_msg(bet)}")

        # Also print in console
        print(f"\n✅ {msg_prefix} - Passed rules")
        print(format_dry_run(bet))
        print(format_msg(bet))

    else:
        print("\n⛔ BET FILTERED")
        print("REASON:", reason)
        # Telegram for TIME-based rejections
        if "Game starts soon" in reason or "Past scheduled time" in reason or "Time restriction" in reason or "Player not allowed" in reason or "Sport not allowed" in reason or "Game type not allowed" in reason:
            msg = f"⛔ {msg_prefix} BET FILTERED (TIME RULE)\nReason: {reason}\n{format_msg(bet)}"
            send_telegram(msg)

# ================== CONTINUOUS MONITOR ==================
def monitor_loop(driver):
    log("[SCRAPE] Continuous monitoring started")

    while True:
        try:
            rows = driver.find_elements(By.CSS_SELECTOR, "tr.wager-detail-info")
            log(f"[SCRAPE] rows found: {len(rows)}")

            for idx, row in enumerate(rows):
                try:
                    process_row(driver, row, idx)
                except StaleElementReferenceException:
                    continue
                except Exception as e:
                    log("[ROW ERROR]", e)

            driver.execute_script("window.scrollBy(0,150)")
            human_delay(3,4)

        except Exception as e:
            log("[LOOP ERROR]", e)
            human_delay(6,8)

# ================== BOT WRAPPER (WITH AUTO-RECONNECT) ==================

def launch_bot(stop_flag_ref):
    """
    stop_flag_ref = {"stop": False}
    """
    driver = None
    last_restart = time.time()

    while not stop_flag_ref.get("stop", False):
        try:
            # ✅ Restart Chrome every 15 minutes
            if driver is None or (time.time() - last_restart) > 15 * 60:
                if driver:
                    log("[BOT] 15 minutes passed, restarting Chrome...")
                    try:
                        driver.quit()
                    except:
                        pass
                driver = launch_driver()
                login_and_open_monitor(driver)
                last_restart = time.time()
                log("[BOT] Chrome restarted and monitor loaded")

            # ================== SCRAPING LOOP ==================
            rows = driver.find_elements(By.CSS_SELECTOR, "tr.wager-detail-info")

            # unique rows by ticket
            unique_rows = {}
            for row in rows:
                tid = row.get_attribute("id").replace("tr-", "")
                if tid not in unique_rows:
                    unique_rows[tid] = row

            log(f"[SCRAPE] unique rows found: {len(unique_rows)}")

            # ✅ Process only unique rows
            for idx, (ticket, row) in enumerate(unique_rows.items()):
                try:
                    process_row(driver, row, idx)
                except StaleElementReferenceException:
                    continue
                except Exception as e:
                    log("[ROW ERROR]", e)

            # Human-like scrolling
            driver.execute_script("window.scrollBy(0,150)")
            human_delay(0.8, 1.5)

        # ================== CONNECTION / DRIVER FAILURES ==================
        except (ConnectionResetError, OSError) as e:
            log("[BOT] Connection lost or driver crashed:", e)
            try:
                if driver:
                    driver.quit()
            except:
                pass
            driver = None
            last_restart = time.time()
            log("[BOT] Restarting driver in 5 seconds...")
            time.sleep(5)

        # ================== OTHER ERRORS ==================
        except Exception as e:
            log("[BOT LOOP ERROR]", e)
            human_delay(6, 8)

    # ================== STOP BOT ==================
    log("[BOT] stop flag detected, quitting driver...")
    if driver:
        try:
            driver.quit()
        except:
            pass
    log("[BOT] stopped gracefully")