import { useMemo } from "react";

export const useRandomNumber = () => {
  const heartCount = useMemo(() => {
    return Math.floor(Math.random() * 99999).toLocaleString();
  }, []);
  const reviewCount = useMemo(() => Math.floor(Math.random() * 999), []);

  return {
    heartCount,
    reviewCount,
  };
};
