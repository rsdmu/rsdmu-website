// src/components/IconLink.js
import React from "react";

const IconLink = ({ to, src, alt, label }) => {
  return (
    <a href={to} className="icon-link">
      <img src={src} alt={alt} />
      <span>{label}</span>
    </a>
  );
};

export default IconLink;
