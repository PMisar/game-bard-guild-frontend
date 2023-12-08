// src/components/HomeImage.jsx
import React from "react";

function HomeImage() {
  return (
    <div className="home-image-container">
      <img src="/images/homeImage.png" alt="Home" />
      <div className="video-overlay">
        <video autoPlay loop muted className="video-element">
          <source src="/images/Gamebard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomeImage;
