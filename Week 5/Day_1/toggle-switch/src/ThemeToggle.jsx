import { useState } from "react";
import './ThemeToggle.css'

export const ThemeToggle = () => {

  // State for theme
  const [isDark, setIsDark] = useState(false);

  // Toggle function
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Dynamic class depending on theme
  const themeClass = isDark ? "dark" : "light";

  return (

    // Main container takes full screen
    <div className={`container ${themeClass}`}>

      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </div>

  );
};