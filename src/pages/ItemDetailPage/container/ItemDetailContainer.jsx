import { ItemImageView, ItemDetailView } from "../view";
import { useItemDetailPageData, useRandomNumber } from "./hooks";

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
    size: sizeOptions,
    images: imageUrl,
    colorOptions,
    isLoading,
  } = useItemDetailPageData();

  const { heartCount, reviewCount } = useRandomNumber();

  if (isLoading) {
    return <div>loading</div>;
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
        size={sizeOptions}
        color={colorOptions}
        heartCount={heartCount}
        reviewCount={reviewCount}
      />
    </>
  );
};
