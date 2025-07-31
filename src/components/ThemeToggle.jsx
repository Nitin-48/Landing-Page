import React from "react";

export default function ThemeToggle() {
  const toggleTheme = () => {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
    console.log("Switched to Light");
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
    console.log("Switched to Dark");
  }
};


  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full border border-cyan-400/30 hover:scale-105 transition"
    >
      Toggle Theme
    </button>
  );
}
