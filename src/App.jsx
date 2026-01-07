import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./Component/Background/Background.jsx";
import CaseStudy from "./Component/Casestudy/CaseStudy.jsx";
import AllCaseStudies from "./Component/Casestudy/AllCaseStudies.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Background />} />
      <Route path="/case-studies" element={<AllCaseStudies />} />
    </Routes>
  );
};

export default App;
