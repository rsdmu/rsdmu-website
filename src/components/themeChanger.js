// src/components/themeChanger.js
import React, { useState, useEffect } from 'react';

const ThemeChanger = () => {
  const isBrowser = typeof window !== 'undefined';
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (isBrowser) {
      const savedTheme = window.localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, [isBrowser]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (isBrowser) {
      document.body.classList.remove(theme);
      document.body.classList.add(newTheme);
      window.localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeChanger;
