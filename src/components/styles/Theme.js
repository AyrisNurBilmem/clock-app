import { useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState("morning");

  const toggleTheme = () => {
    theme === "morning" ? setTheme("morning") : setTheme("night");
  };
  return [theme, toggleTheme];
};
