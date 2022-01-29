import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export const ScrollButton = () => {
  const [visible, setVisibile] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisibile(true);
    } else if (scrolled <= 300) {
      setVisibile(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a id="arrow-wrap">
      <FaArrowUp
        onClick={scrollToTop}
        id="up-arrow"
        // className="fa-solid fa-arrow-up"
        style={{
          display: visible ? "inline" : "none",
        }}
      />
    </a>
  );
};
