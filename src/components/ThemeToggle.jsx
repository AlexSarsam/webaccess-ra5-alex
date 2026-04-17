import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 bg-gray-800 text-white dark:bg-white dark:text-gray-900 rounded ml-4 focus:outline-none focus:ring-2 focus:ring-white"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {darkMode ? "☀ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeToggle;
