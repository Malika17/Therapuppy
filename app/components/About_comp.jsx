import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-semi">
        <div className="text-therapuppy">
          <h1>
            <span>WHAT</span> IS THERAPUPPY?
          </h1>
          <svg
            fill="#e33529"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            id="down-arrow"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <line
                id="primary"
                x1="12"
                y1="3"
                x2="12"
                y2="21"
                style={{
                  fill: "none",
                  stroke: "#e33529",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              ></line>
              <polyline
                id="primary-2"
                data-name="primary"
                points="9 18 12 21 15 18"
                style={{
                  fill: "none",
                  stroke: "#e33529",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              ></polyline>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
