import React from "react";
import "./Example.css";
import Carousel from "./Carousel";
const Example = () => {
  return (
    <div className="example-container">
      <div className="example-left">
        <p className="bullet">
          <span>Experience</span> <br />
          <u>Interactive Play Sessions</u>: Engage in playful interactions with
          our rescue puppies to lift your spirits. <br />
          <br />
          <u>Stress Relief</u>: therapeutic benefits as you unwind and de-stress
          with our adorable companions.
          <br />
          <br /> <u>Wellbeing Focus</u>: We prioritize the health and happiness
          of our rescue dogs, ensuring a safe and caring environment.
        </p>
      </div>
      <div className="example-right">
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Example;
