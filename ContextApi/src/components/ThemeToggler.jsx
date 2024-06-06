// src/components/ThemeToggler.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;
