"use client";
import React, { useEffect, useRef } from "react";
import "./Rotate.css"; // Import the CSS file for rotation styles
import CircleType from "circletype"; // Import Circletype library

const RotatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        textRef.current.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="circle">
        <p id="text" ref={textRef}>
          HEALING &#8226; HEARTS &#8226; WITH &#8226; FURRRR &#8226;
        </p>
      </div>
    </div>
  );
};

export default RotatingText;
