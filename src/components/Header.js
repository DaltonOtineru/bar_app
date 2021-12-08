import React from "react";
import ReactDOM from "react-dom";

export const Header = () => {
  return (
    <header id="header-container">
      <div className="logo">Bar Logo</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Live Shows</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};
