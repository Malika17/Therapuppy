"use client";
import React, { useState } from "react";
import "./Carousel.css";
import caro_1 from "./caro-1.png";
import caro_2 from "./caro-2.png";
import caro_3 from "./caro-3.png";

const images = [caro_1, caro_2, caro_3];

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  const nextSlide = () => {
    if (currImg < images.length - 1) {
      setCurrImg(currImg + 1);
    } else {
      setCurrImg(0);
    }
  };

  const prevSlide = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    } else {
      setCurrImg(images.length - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carouselInner">
        <img
          src={images[currImg].src}
          alt={`Slide ${currImg + 1}`}
          className="carouselImg"
        />
        <div className="left" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="center"></div>
        <div className="right" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default Carousel;
