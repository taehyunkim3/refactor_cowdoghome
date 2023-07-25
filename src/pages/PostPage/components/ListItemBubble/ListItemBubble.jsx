import { styled } from "styled-components";
import {
  ItemDetailBubbleLayout,
  StItemBubbleArrow,
  StItemBubbleImage,
  StItemBubbleText,
} from "./style";
import { HiChevronRight } from "react-icons/hi";
import { Button } from "../../../../components";

const ScrollPage = styled.div`
  flex: 1 1 auto;
  padding: 3px 0px;
  overflow: auto;
`;

/**
 * @param {string} imageUrl - 아이템 이미지 url
 * @param {string} x - 아이템 이미지 x축 위치 (px, rem, %)
 * @param {string} y - 아이템 이미지 y축 위치
 * @param {string} price - 아이템 가격 (숫자+콤마)
 * @param {string} brand - 아이템 브랜드
 * @param {string} name - 아이템 이름
 * @param {function} onClickFunction - 아이템 클릭 함수
 */
export const ListItemBubble = ({
  imageUrl = "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/163413022650162731.jpg?gif=1&w=180&h=180&c=c&webp=1",
  x = "0px",
  y = "0px",
  price = "999,999,999",
  brand = "브랜드",
  name = "이름이름이름이름이름이름이름이름이름이름",
  onClickFunction = () => {},
  noButton = false,
}) => {
  return (
    <>
      <ScrollPage>
        {" "}
        <ItemDetailBubbleLayout
          xPosition={x}
          yPosition={y}
          onClick={onClickFunction}
        >
          <StItemBubbleImage>
            <img src={imageUrl} alt="itemImage" />
          </StItemBubbleImage>
          <StItemBubbleText>
            <span className="brand">{brand}sdsd</span>
            <p className="name">{name}</p>
          </StItemBubbleText>
          {!noButton && (
            <StItemBubbleArrow>
              <Button theme="empty" size="small" label="선택" />
            </StItemBubbleArrow>
          )}
        </ItemDetailBubbleLayout>
      </ScrollPage>
    </>
  );
};
