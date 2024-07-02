"use client";
import React from "react";
import "./dog.css"; // Import CSS file for styles

const Dog = () => {
  return (
    <div className="main">
      <div className="text-1">
        <h1>EVERYONE IS HAPPIER</h1>
      </div>
      <div className="text-2">
        <h1>
          <span> WITH A</span> FURRY FRIEND
        </h1>
      </div>

      {/* Dog animation container */}
      <div className="dog">
        {/* Dog paws */}
        <div className="dog__paws">
          {/* Back left leg */}
          <div className="dog__bl-leg leg">
            {/* Back left paw */}
            <div className="dog__bl-paw paw"></div>
            {/* Top part of back left leg */}
            <div className="dog__bl-top top"></div>
          </div>
          {/* Front left leg */}
          <div className="dog__fl-leg leg">
            {/* Front left paw */}
            <div className="dog__fl-paw paw"></div>
            {/* Top part of front left leg */}
            <div className="dog__fl-top top"></div>
          </div>
          {/* Front right leg */}
          <div className="dog__fr-leg leg">
            {/* Front right paw */}
            <div className="dog__fr-paw paw"></div>
            {/* Top part of front right leg */}
            <div className="dog__fr-top top"></div>
          </div>
        </div>
        {/* Dog body */}
        <div className="dog__body">
          {/* Dog tail */}
          <div className="dog__tail"></div>
        </div>
        {/* Dog head */}
        <div className="dog__head">
          {/* Dog snout */}
          <div className="dog__snout">
            {/* Dog nose */}
            <div className="dog__nose"></div>
            {/* Dog eyes */}
            <div className="dog__eyes">
              {/* Left eye */}
              <div className="dog__eye-l"></div>
              {/* Right eye */}
              <div className="dog__eye-r"></div>
            </div>
          </div>
        </div>
        {/* Dog head contour */}
        <div className="dog__head-c">
          {/* Left ear */}
          <div className="dog__ear-l"></div>
          {/* Right ear */}
          <div className="dog__ear-r"></div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
