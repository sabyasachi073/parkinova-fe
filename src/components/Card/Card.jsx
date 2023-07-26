import React from "react";
import "./Card.css";

const Card = ({ image }) => {
  const percentage = (image.result * 100).toFixed(0);
  let resultColor;

  if (percentage <= 50) {
    resultColor = "#05a26e";
  } else if (percentage > 50 && percentage < 70) {
    resultColor = "#fcc112";
  } else {
    resultColor = "#FF0032";
  }
  return (
    <>
      <div className="resultCard">
        <div className="resultCardImage">
          <img src={image.image} alt="sample87" />
        </div>

        <div className="ResultCardDetails">
          <p className="ResultImageDetails">
            Parkinson Probability:{" "}
            <span
              className="resultCardPercentage"
              style={{ color: `${resultColor}` }}
            >
              {percentage}%
            </span>
          </p>
          <p className="resultImageDate">
            {new Date(image.created_at).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
