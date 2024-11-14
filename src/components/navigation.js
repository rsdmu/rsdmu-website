// src/components/Navigation.js
import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "./ThemeChanger"

const Navigation = () => (
  <nav className="main-menu">
    <Link to="/">Home</Link>
    <Link to="/bio">Bio</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/papers">Papers</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>
)

export default Navigation
