// src/components/ScrollSpyNav.js
import React from "react";
import Scrollspy from "react-scrollspy";
import ThemeChanger from "./themeChanger";
import IconLink from "./IconLink"; // Import IconLink for Home button
import { Link } from "gatsby";
import { useLocation } from "@reach/router"; 
import "./ScrollSpyNav.scss"; 

const ScrollSpyNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Left Section: Home Button */}
        <div className="nav-left">
          <IconLink
            to="/" // Link to the home page
            src="/icons/home.svg" // Path to Home SVG
            alt="Home"
            label="" // No label for Home
            className="home-button" // Assign class for styling
          />
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="site-nav">
          {isHome ? (
            <Scrollspy
              items={["work", "publications", "bio", "contact"]}
              currentClassName="is-current"
              className="scrollspy-nav"
              offset={-80} // Adjust based on header height
            >
              <li><a href="#work">Work</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#bio">Bio</a></li>
              <li><a href="#contact">Contact</a></li>
            </Scrollspy>
          ) : (
            <ul className="scrollspy-nav">
              <li><Link to="/#work">Work</Link></li>
              <li><Link to="/#publications">Publications</Link></li>
              <li><Link to="/#bio">Bio</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          )}
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
