// src/components/HomeButton.js
import React from "react";
import HomeIcon from "./icons/HomeIcon";
import "../styles/global.scss";

const HomeButton = () => {
  return (
    <a href="#home" className="home-button" aria-label="Home">
      <HomeIcon />
    </a>
  );
};

export default HomeButton;
