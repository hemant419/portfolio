import React from "react";

import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">1.2+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">4+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1+</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
