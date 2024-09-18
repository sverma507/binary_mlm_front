// src/components/Slider.js
import React, { useEffect, useState } from "react";
import "./swipper.css";

const Swipper = () => {
  const images = [
    "/images/binary1.png",
    "/images/binary2.png",
    "/images/binary3.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `rotateY(${currentIndex * -72}deg)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swipper;
