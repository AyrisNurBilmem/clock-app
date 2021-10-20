import { useState } from "react";

export const MoreLess = () => {
  const [buttonPress, setButtonPress] = useState(false);

  const toggleButton = () => {
    buttonPress === false ? setButtonPress(true) : setButtonPress(false);
  };

  return [buttonPress, toggleButton];
};
