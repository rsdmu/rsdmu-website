// src/components/IconLink.js
import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./IconLink.scss"; // Ensure this file exists and is styled

const IconLink = ({ to, src, alt, label, className }) => (
  <Link to={to} className={`icon-link ${className}`}>
    <img src={src} alt={alt} />
    {label && <span>{label}</span>}
  </Link>
);

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

IconLink.defaultProps = {
  label: "",
  className: "",
};

export default IconLink;
