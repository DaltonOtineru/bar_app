import React from "react";

export const Hero = () => {
  return (
    <div className="hero-img">
      <div className="overlay">
        <span className="border">
          <div className="inner">
            <span className="est">EST. | 2011</span>
            <h1>SODA</h1>
            <h1>BAR</h1>
            <span className="address">1432 Main St.</span>
            <span className="address">San Diego, CA 91194</span>
            <span className="hours">Open from 5PM - 2AM</span>
          </div>
        </span>
      </div>
    </div>
  );
};