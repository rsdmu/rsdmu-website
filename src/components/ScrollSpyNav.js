// src/components/ScrollSpyNav.js
import React from "react";
import Scrollspy from "react-scrollspy";
import ThemeChanger from "./themeChanger";
import IconLink from "./IconLink"; // Import IconLink for Home button
import "./ScrollSpyNav.scss"; // Ensure this SCSS file exists and is correctly styled

const ScrollSpyNav = () => {
  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Left Section: Home Button */}
        <div className="nav-left">
          <IconLink
            to="#home" // Link to the home section
            src="/icons/home.svg" // Path to Home SVG
            alt="Home"
            label="" // No label for Home
            className="home-button" // Assign class for styling
          />
        </div>

        {/* Center Section: Navigation Links */}
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

        {/* Right Section: Theme Changer */}
        <div className="nav-right">
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default ScrollSpyNav;
