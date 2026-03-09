const GrowthArrow = () => {
  return (
    <svg
      className="growth-arrow"
      viewBox="0 0 65 46"
      width="44"
      height="34"
      fill="none"
    >
      <defs>
        {/* gradient */}
        <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6DFB9F" />
          <stop offset="50%" stopColor="#6DFB9F" />
          <stop offset="100%" stopColor="#6DFB9F" />
        </linearGradient>
      </defs>

      {/* base line */}
      <path
        d="M 0 37.048 L 19.24 17.722 L 32.708 33.821 L 54.576 0"
        stroke="url(#growthGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 4)"
        className="arrow-line"
      />

      {/* arrow head */}
      <path
        d="M 11.286 0 L 0 3.865 M 11.286 0 L 13.468 10.63"
        stroke="url(#growthGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(47.29 4)"
        className="arrow-head"
      />
    </svg>
  );
};

export default GrowthArrow;
