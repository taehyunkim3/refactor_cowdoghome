import { ItemDetailView, ItemImageView } from "../view";
import { useItemDetailPageData } from "./hooks";

export const ItemDetailContainer = () => {
  const {
    benefit,
    brandName,
    discount,
    discountprice,
    itemId,
    itemName,
    price,
    rating,
    size,
    images: imageUrl,
    colorOptions,
    isLoading,
  } = useItemDetailPageData();

  if (isLoading) {
    return <div>loading~~</div>;
  }
  return (
    <>
      <ItemImageView imageUrl={imageUrl} />
      <ItemDetailView
        brandName={brandName}
        itemName={itemName}
        discountprice={discountprice}
        benefit={benefit}
        rating={rating}
        discount={discount}
        price={price}
      />
    </>
  );
};
