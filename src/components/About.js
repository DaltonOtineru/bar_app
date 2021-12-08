import React from "react";
import Image from "../img/beer.jpg";
import Image2 from "../img/show.jpg";

export const About = () => {
  return (
    <div className="about-wrap">
      <div className="about-inner">
        <div className="top-info">
          <h3 className="title">ABOUT</h3>
          <h3 className="institution">YOUR NEIGHBORHOOD INSITUTION</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="happyhr-container">
          <img src={Image} alt="bartender pouring a beer" id="beer-img" />
          <div className="happyhr-info">
            <h3 className="title">HAPPY HOUR</h3>
            <h3 className="beer-tuesday">CRAFT BEER TUESDAY</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="shows-container">
          <div className="shows-info">
            <h3 className="title">MUSIC</h3>
            <h3 className="next-show">NEXT SHOW: MESETA</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img src={Image2} alt="live show at the bar" id="show-img" />
        </div>
      </div>
    </div>
  );
};
