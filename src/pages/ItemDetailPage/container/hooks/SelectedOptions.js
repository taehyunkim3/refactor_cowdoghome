import { useState } from "react";

export const useSelectedOptions = () => {
  const [selectedOption, setSelectedOption] = useState(["", ""]);
  const isSelectFinished = selectedOption.every((e) => e);

  return {
    selectedOption,
    setSelectedOption,
    isSelectFinished,
  };
};
