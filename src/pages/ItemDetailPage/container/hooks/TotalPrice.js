import { useEffect, useState } from "react";

export const useTotalPrice = (selectedProducts) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = selectedProducts.reduce((prev, cur) => {
      return prev + cur.price * cur.count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [selectedProducts]);

  return {
    totalPrice,
  };
};
