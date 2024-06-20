import { useState, useEffect, useDebugValue } from "react";

export function useDarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Debug label for React DevTools
  useDebugValue(isDarkMode ? "Dark Mode" : "Light Mode");

  useEffect(() => {
    // Logic to apply dark/light mode styles to the application
    if (isDarkMode) {
      // Apply dark mode styles
      document.body.classList.add("dark-mode");
    } else {
      // Apply light mode styles
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) };
}
