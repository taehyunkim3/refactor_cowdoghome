import {
  ItemDetailBubbleLayout,
  StItemBubbleArrow,
  StItemBubbleImage,
  StItemBubbleText,
} from "./style";
import { HiChevronRight } from "react-icons/hi";
/***
 * @param {string} imageUrl - 아이템 이미지 url
 * @param {string} xPosition - 아이템 이미지 x축 위치 (px, rem, %)
 * @param {string} yPosition - 아이템 이미지 y축 위치
 * @param {string} price - 아이템 가격 (숫자+콤마)
 * @param {string} brand - 아이템 브랜드
 * @param {string} name - 아이템 이름
 */
export const ItemDetailBubble = ({
  imageUrl = "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/163413022650162731.jpg?gif=1&w=180&h=180&c=c&webp=1",
  xPosition = "0px",
  yPosition = "0px",
  price = "999,999,999",
  brand = "브랜드",
  name = "이름이름이름이름이름이름이름이름이름이름",
}) => {
  return (
    <>
      <ItemDetailBubbleLayout xPotition={xPosition} yPosition={yPosition}>
        {" "}
        <StItemBubbleImage>
          <img src={imageUrl} alt="itemImage" />
        </StItemBubbleImage>
        <StItemBubbleText>
          <span className="brand">{brand}</span>
          <p className="name">{name}</p>
          <span className="price">{price}</span>
        </StItemBubbleText>
        <StItemBubbleArrow>
          <HiChevronRight className="shevron" />
        </StItemBubbleArrow>
      </ItemDetailBubbleLayout>
    </>
  );
};
