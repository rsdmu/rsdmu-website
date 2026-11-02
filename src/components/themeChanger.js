// src/components/themeChanger.js
import React, { useEffect, useState } from "react";
import "./themeChanger.scss";

const ThemeChanger = () => {
  // Match the server render before restoring the browser's saved preference.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setTheme(savedTheme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (!theme) return;
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
