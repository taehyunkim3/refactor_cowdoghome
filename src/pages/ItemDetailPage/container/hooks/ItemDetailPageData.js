import { useQuery } from "@tanstack/react-query";
import { ItemDetailPageDataFetch } from "../../../../api";

export const useItemDetailPageData = () => {
  const { getItemDetailPageData } = ItemDetailPageDataFetch();

  const { data, isLoading } = useQuery({
    queryKey: ["ItemDetailData"],
    queryFn: getItemDetailPageData,
  });

  if (isLoading) {
    return {
      isLoading: true,
      data: {},
    };
  }

  const colorOptions = JSON.parse(data["ColorOptions.color"]);
  const images = JSON.parse(data["ItemImgLists.itemImg"]);
  const size = JSON.parse(data["SizeOptions.size"]);

  const {
    benefit,
    brandName,
    discount,
    discountprice,
    itemId,
    itemName,
    price,
    rating,
  } = data;

  return {
    isLoading,
    benefit,
    brandName,
    discount,
    discountprice,
    itemId,
    itemName,
    price,
    rating,
    size,
    images,
    colorOptions,
  };
};
