import React from "react";
import Button from "../button/Button";
import RunYourBusinessCard from "../runYourBusinessCard/RunYourBusinessCard";
import rightArrowImg from "../../svg/right-arrow.svg";
import "./RunYourBusiness.scss";

function RunYourBusiness() {
  return (
    <div className="run-your-business">
      <div className="card">
        <RunYourBusinessCard />
      </div>
      <div className="contents">
        <h2>Run your business in Gig Share</h2>
        <p>
          In Gig Share, you can work directly with the leading communication
          platforms - Slack and Zoom. Now you can have a brief meeting with your
          colleagues or even a video conference with just a couple of mouse
          clicks.
        </p>

        <div className="actions">
          <Button>
            <span className="text-2">Get started</span>
          </Button>

          <a href="/" className="learn-more">
            Learn more
            <span className="right-arrow">
              <img src={rightArrowImg} alt="statistics line 3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RunYourBusiness;
