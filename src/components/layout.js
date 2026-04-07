// src/components/layout.js
import React from "react";
import ScrollSpyNav from "./ScrollSpyNav";
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <ScrollSpyNav />

      <main style={{ paddingTop: "0px" }}> {/* Adjust padding as needed */}
        {children}
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Rashid Mushkani. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
