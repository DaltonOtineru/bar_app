import React, { useEffect } from "react";
import Image from "../img/beer.jpg";
import Image2 from "../img/show.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="about-wrap">
      <div className="about-inner">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-once="true"
          className="top-info"
        >
          <h3 className="title" ID="about-title">
            ABOUT
          </h3>
          <h3 className="institution">YOUR NEIGHBORHOOD INSITUTION</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="happyhr-container">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-once="true"
            src={Image}
            alt="bartender pouring a beer"
            id="beer-img"
          />
          <div
            className="happyhr-info"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-once="true"
          >
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
          <div
            className="shows-info"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <h3 className="title">MUSIC</h3>
            <h3 className="next-show">NEXT SHOW: MESETA</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-once="true"
            src={Image2}
            alt="live show at the bar"
            id="show-img"
          />
        </div>
      </div>
    </div>
  );
};
