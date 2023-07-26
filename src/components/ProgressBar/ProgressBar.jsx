import React, { useEffect, useState } from "react";

const ProgressBar = ({ percentage, val }) => {
  let strokeColor;
  if (percentage <= 50) {
    strokeColor = "#05a26e";
  } else if (percentage > 50 && percentage < 70) {
    strokeColor = "#fcc112";
  } else {
    strokeColor = "#FF0032";
  }
  const radius = 80 * val;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const perc = parseFloat(percentage * 0.01 * circumference);
    const percQuarter = parseFloat(perc * 0.25);
    const newOffset = parseFloat(circumference - percQuarter * 4);

    setOffset(Math.min(newOffset, circumference));
  }, [percentage]);

  return (
    <div
      style={{
        position: "relative",
        width: `${200 * val}px`,
        height: `${200 * val}px`,
      }}
    >
      <h1
        style={{
          color: `${strokeColor}`,
          fontSize: `${40 * val}px`,
          position: "absolute",
          fontFamily: `'Rochester', cursive`,
          fontWeight: "600",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.6",
        }}
      >
        {percentage}%
      </h1>
      <svg className="progress-circle" width={200 * val} height={200 * val}>
        <g transform={`rotate(-90 ${100 * val} ${100 * val})`}>
          <circle
            className="bg"
            r={radius}
            cx={100 * val}
            cy={100 * val}
            fill="none"
            strokeWidth={12 * val}
            stroke="#d0e7e6"
          ></circle>
          <circle
            className="progress"
            r={radius}
            cx={100 * val}
            cy={100 * val}
            fill="none"
            strokeWidth={12 * val}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default ProgressBar;
