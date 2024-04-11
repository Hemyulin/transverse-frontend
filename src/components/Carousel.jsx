import React, { useState, useEffect } from "react";

const images = [
  "/images/Florance.jpeg",
  "/images/IrishPub.png",
  "/images/garden.jpeg",
  "/images/roof.jpeg",
  "/images/seated.jpeg",
  "/images/street.jpeg",
  "/images/wine.png",
];

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt="Showcase"
        style={{ width: "709px", height: "473px", margin: "0 15px" }}
      />
    </div>
  );
}

export default ImageCarousel;
