// src/components/ScrollSpyNav.js
import React from "react";
import Scrollspy from "react-scrollspy";
import ThemeChanger from "./themeChanger";
import "./ScrollSpyNav.scss"; // Create this SCSS file for styles

const ScrollSpyNav = () => {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Scrollspy
          items={["papers", "projects", "bio", "contact"]}
          currentClassName="is-current"
          className="scrollspy-nav"
          offset={-80} // Adjust based on header height
        >
          <li><a href="#papers">Papers</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#bio">Bio</a></li>
          <li><a href="#contact">Contact</a></li>
        </Scrollspy>
      </nav>
      <ThemeChanger />
    </header>
  );
};

export default ScrollSpyNav;
