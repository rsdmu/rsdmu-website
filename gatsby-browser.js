// gatsby-browser.js
import "typeface-montserrat";
import "typeface-bebas-neue";
import "prismjs/themes/prism-okaidia.css";
import "./src/styles/global.scss";

export const onClientEntry = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister()))
      )
      .catch(() => {});
  });
};
