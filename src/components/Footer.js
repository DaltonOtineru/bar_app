import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <footer>
      <div className="footer-inner">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="500"
          className="footer-upper"
          data-aos-once="true"
        >
          <div className="vip">
            <h3 className="title">Join VIP & get updates on special events</h3>
            <div className="email">
              <input type="text" placeholder="Email" />
              <button type="button">Join Now</button>
            </div>
          </div>
        </div>
        <div
          className="footer-contact"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="icons">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-add">
            <p id="add1">3615 El Cajon Blvd. </p>
            <p id="add2"> San Diego, CA 92104</p>
            <p>Open from 8PM - 2AM</p>
            <a
              className="footer-a"
              id="footer-email"
              href="mailto:info@sodabarpresents.com"
            >
              info@sodabarpresents.com
            </a>
            <a href="tel:6199555551" className="footer-a">
              619-955-5551
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
