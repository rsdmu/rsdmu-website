
// gatsby-browser.js
import "prismjs/themes/prism-okaidia.css";
import "./src/styles/global.scss";
import "typeface-roboto"; // Or any font you choose


export const onInitialClientRender = () => {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const savedTheme = window.localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
  }
};
