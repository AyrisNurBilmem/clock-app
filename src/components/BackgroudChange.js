import React, { useEffect } from "react";

const BackgroudChange = ({ theme, toggleTheme }) => {
  let time = new Date();
  time = time.getHours();

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    if ((time > 0 && time < 7) || (time > 17 && time <= 23)) {
      toggleTheme(theme === "morning");
      console.log(theme);
    } else {
      toggleTheme(theme === "night");
    }
  };

  return <></>;
};

export default BackgroudChange;
