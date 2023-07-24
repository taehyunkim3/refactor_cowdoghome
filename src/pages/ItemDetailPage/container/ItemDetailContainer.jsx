import { ItemDetailView, ItemImageView } from "../view";

export const ItemDetailContainer = () => {
  const brandName = "이케아";
  const itemName = "화장대 스툴 모음전";
  const rating = 2;
  const discount = "25%";
  const price = "89,000원";
  const discountprice = "65,900원";
  const benefit = "66P";
  const lowprice = "";
  const highprice = "";
  const imageUrl = [
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=288",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=288",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=288",
  ];

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
