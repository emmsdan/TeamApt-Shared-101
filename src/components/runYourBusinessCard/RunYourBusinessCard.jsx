import React from "react";
import "./RunYourBusinessCard.scss";
import womanWithIpad from "../../images/woman-with-ipad.png";
import statLine1 from "../../svg/stat-line-1.svg";
import statLine2 from "../../svg/stat-line-2.svg";
import statLine3 from "../../svg/stat-line-3.svg";
import mosaic1 from "../../svg/mosaic-1.svg";
import dots from "../../svg/dots.svg";

import { Reveal } from "react-gsap";
import Animation from "../animations/Animation";

function RunYourBusinessCard() {
  return (
    <div className="run-your-business-card">
      <div className="lady-img">
        <img src={womanWithIpad} alt="Lady's" />
      </div>
      <div className="stats">
        <h3>Period statistics</h3>
        <h4>January</h4>
        <Reveal target={<div />}>
          <div className="lines">
            <Animation>
              <img src={statLine1} alt="statistics line 1" className="img-1" />
            </Animation>
            <Animation>
              <img src={statLine2} alt="statistics line 2" className="img-2" />
            </Animation>
            <Animation>
              <img src={statLine3} alt="statistics line 3" className="img-3" />
            </Animation>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Animation from={{ transform: "translate(20%, -20%)" }}>
          <img src={mosaic1} alt="decoration" className="card-mosaic" />
        </Animation>
        <Animation from={{ transform: "translateX(-120%)" }}>
          <img src={dots} alt="decoration" className="card-dots" />
        </Animation>
      </Reveal>
    </div>
  );
}

export default RunYourBusinessCard;
