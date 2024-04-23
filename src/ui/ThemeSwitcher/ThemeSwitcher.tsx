"use client";

import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button
        onClick={() => {
          console.log("change to light");
          setTheme("light");
        }}
      >
        Light Mode
      </button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
