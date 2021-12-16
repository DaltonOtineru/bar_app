import React, { useEffect } from "react";

export const Hero = () => {
  return (
    <div className="hero-img">
      <div className="overlay">
        <span className="border">
          <div className="inner">
            <span className="est">EST. | 2000</span>
            <h1 id="soda-hero">SODA</h1>
            <h1 id="bar-hero">BAR</h1>
            <span className="address">3615 El Cajon Blvd.</span>
            <span className="address">San Diego, CA 92104</span>
            <span className="hours">Open from 8PM - 2AM</span>
          </div>
        </span>
      </div>
    </div>
  );
};
