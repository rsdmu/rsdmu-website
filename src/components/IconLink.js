// src/components/IconLink.js
import React from "react";
import PropTypes from "prop-types";
import "./IconLink.scss";

const IconLink = ({ to, src, alt, label, className }) => {
  return (
    <a href={to} className={`icon-link ${className ? className : ""}`}>
      <img src={src} alt={alt} />
      {label && <span>{label}</span>}
    </a>
  );
};

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default IconLink;
