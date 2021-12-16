import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-scroll";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navbar">
      <div className="container navbar-header align-center text-center">
        <a className="navbar-brand align-items-center" href="#">
          <span className="soda">SODA BAR</span>
        </a>
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
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Live Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
