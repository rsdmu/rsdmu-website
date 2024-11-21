// src/components/themeChanger.js
import React, { useEffect, useState } from "react";
import "./themeChanger.scss";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "dark" // Default to dark theme
  );

  useEffect(() => {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};

export default ThemeChanger;
