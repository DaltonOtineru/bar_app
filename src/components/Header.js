import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navbar">
      <div className="container navbar-header align-center text-center">
        <Link
          className="navbar-brand align-items-center soda"
          to="top"
          smooth={true}
          duration={1000}
        >
          SODA BAR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="top" smooth={true} duration={1000} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="menu-section"
                smooth={true}
                duration={1000}
              >
                Drinks
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                Live Shows
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
