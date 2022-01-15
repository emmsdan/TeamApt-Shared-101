import React from "react";
import "./RunYourBusinessCard.scss";
import womanWithIpad from "../../images/woman-with-ipad.png";
import statLine1 from "../../svg/stat-line-1.svg";
import statLine2 from "../../svg/stat-line-2.svg";
import statLine3 from "../../svg/stat-line-3.svg";
import mosaic1 from "../../svg/mosaic-1.svg";
import dots from "../../svg/dots.svg";

function RunYourBusinessCard() {
  return (
    <div className="run-your-business-card">
      <div className="lady-img">
        <img src={womanWithIpad} alt="Lady's" />
      </div>
      <div className="stats">
        <h3>Period statistics</h3>
        <h4>January</h4>
        <div className="lines">
          <img src={statLine1} alt="statistics line 1" />
          <img src={statLine2} alt="statistics line 2" />
          <img src={statLine3} alt="statistics line 3" />
        </div>
      </div>
      <img src={mosaic1} alt="decoration" className="card-mosaic" />
      <img src={dots} alt="decoration" className="card-dots" />
    </div>
  );
}

export default RunYourBusinessCard;
