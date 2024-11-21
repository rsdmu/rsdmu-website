// gatsby-browser.js
import "prismjs/themes/prism-okaidia.css";
import "./src/styles/global.scss";

export const onClientEntry = () => {
  // Polyfill for older browsers if needed
};

export const onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme') || 'dark'; // Set default to dark
    document.body.classList.add(savedTheme);
  }
};
