import { ItemImageLayer } from "./style";

/**
 * @param {string} type - 아이템 이미지 타입 (HouseItem, ShoppingItemSelect, ShoppingItemMain)
 * ShoppingItemMain은 사이즈가 100%로 고정되어 있습니다.
 * @param {string} imgUrl - [선택] 아이템 이미지 url
 * @param {string} size - [선택] 아이템 이미지 크기
 * @param {string} roundSize - [선택] 아이템 이미지 라운드 크기
 * @param {boolean} isHover - [선택] 아이템 이미지 호버 여부
 *
 */
export const ItemImage = ({
  type = "",
  imgUrl = "https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1689916282_naver_f33c08c20b06c9cb1451a01a8a2c5fa83fe135b6b25cec652fa8a06382c0a934.jpg?w=72&h=72&c=c&webp=1",
  roundSize = "0px",
  size = "100px",
  isHover = true,
}) => {
  switch (type) {
    case "HouseItem":
      roundSize = "32px";
      size = "100px";
      isHover = true;
      break;
    case "ShoppingItemSelect":
      roundSize = "4px";
      size = "54px";
      isHover = false;
      break;
    case "ShoppingItemMain":
      roundSize = "6px";
      size = "100%";
      isHover = false;
      break;
    default:
  }

  return (
    <>
      <ItemImageLayer size={size} round={roundSize} isHover={isHover}>
        <img src={imgUrl} alt="itemImage" />
      </ItemImageLayer>
    </>
  );
};
