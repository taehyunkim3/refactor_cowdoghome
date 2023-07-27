import { useEffect, useState } from "react";

export const useSelectedProducts = (
  discountprice,
  selectedOption,
  setSelectedOption,
  additionalPrices
) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    selectedOption.every((e) => e) &&
      setSelectedProducts((prevProducts) => [
        ...prevProducts,
        {
          itemName: selectedOption.join("/"),
          count: 1,
          price: +discountprice + 5000 * additionalPrices[prevProducts.length],
        },
      ]);

    selectedOption.every((e) => e) && setSelectedOption(["", ""]);
  }, [selectedOption]);

  return {
    selectedProducts,
    setSelectedProducts,
  };
};
