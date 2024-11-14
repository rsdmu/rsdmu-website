// src/components/ThemeChanger.js
import React, { useState, useEffect } from 'react';

const ThemeChanger = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if (typeof window !== 'undefined') {
      document.body.classList.remove(theme);
      document.body.classList.add(newTheme);
      window.localStorage.setItem('theme', newTheme);
    }

    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-changer">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeChanger;
