import { useState } from "react";

export const useHeart = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleClickHeart = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return {
    isHeartClicked,
    handleClickHeart,
  };
};
