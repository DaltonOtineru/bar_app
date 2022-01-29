import React, { useEffect, Component, useRef } from "react";

import Image from "../img/beer.jpg";
import Image2 from "../img/show.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="about-wrap" id="about">
      <div className="about-inner">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-once="true"
          className="top-info"
        >
          <h3 className="title" ID="about-title">
            ABOUT US
          </h3>
          <h3 className="institution">YOUR FAVORITE BAR & VENUE</h3>
          <p>
            We've been here in San Diego for over 20 years to bring you all
            amazing drinks and even more amazing music. Come in and catch a show
            or grab a drink and join the Soda Bar family!
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
              Every tuesday, all of the amazing craft beers we serve will be
              half off, all day! Come in and enjoy some of the amazing local
              beers we currently have to offer. We get new craft and local beers
              in frequently so there's always a new, refreshing beer to try from
              our rotation of taps!
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
            <h3 className="next-show">NEXT SHOW: MESETA </h3>

            <p>
              <span className="show-date">Friday December 31st at 8pm</span>,
              come ring in the new year at Soda Bar and jam out to Meseta.
              They'll be performing songs from their recently released album
              "Changes", as well as playing some new, unreleased music. All
              drinks will be half off during the show!
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
