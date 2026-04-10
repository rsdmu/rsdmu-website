// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setBodyAttributes, setPreBodyComponents }) => {
  setBodyAttributes({ className: "dark" });

  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var body=document.body;var savedTheme=window.localStorage.getItem('theme');var theme=savedTheme==='light'?'light':'dark';body.classList.remove('light','dark');body.classList.add(theme);}catch(e){document.body.classList.add('dark');}})();`,
      },
    }),
  ]);
};
