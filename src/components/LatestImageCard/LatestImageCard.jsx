import React from "react";
import "./LatestImageCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const LatestImageCard = ({ image }) => {
  return (
    <div className="latestCard">
      <div className="LatestCardImage">
        <img src={image.image} alt="sample87" />
      </div>
      <div className="latestCardDetails">
        <ul>
          <li>{new Date(image.created_at).toLocaleDateString("en-GB")}</li>
        </ul>

        <div className="small-pie">
          <ProgressBar percentage={(image.result * 100).toFixed(0)} val={1} />
        </div>
      </div>
    </div>
  );
};

export default LatestImageCard;
