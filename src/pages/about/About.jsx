import React from "react";
import { useState } from "react";
import CircularMenu from "../../components/circularMenu/CircularMenu";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import TextZone from "../../components/textZone/TextZone";
import "./about.scss";
const About = () => {
  const [selected, setSelected] = useState("introduce");
  const btns = ["introduce", "education", "experience"];

  return (
    <div className="about" id="about">
        <div className="about-left">
          <div className="about-btns">
            {btns.map((btn, i) => (
              <button
                key={i}
                className={`about-btn ${btn === selected && "active"}`}
                onClick={() => setSelected(btn)}
              >
                {btn}
              </button>
            ))}{" "}
          </div>
          <div className="about-content">
            {selected === "introduce" && <TextZone />}
            {selected === "education" && <Education />}
            {selected === "experience" && <Experience />}
          </div>
        </div>
        <div className="about-right">
          <CircularMenu />
        </div>
    </div>
  );
};

export default About;
