import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-upper">
          <div className="vip">
            <h3 className="title">Join VIP & get updates on special events</h3>
            <div className="email">
              <input type="text" placeholder="Email" />
              <button type="button">Join Now</button>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-add">
            <p>3615 El Cajon Blvd.</p>
            <p>San Diego, CA 92104</p>
            <p>Open from 5PM - 2AM</p>
            <p>info@sodabarpresents.com</p>
            <p>619-955-5551</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
