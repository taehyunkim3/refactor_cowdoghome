import {
  ItemDetailBubbleLayout,
  StItemBubbleArrow,
  StItemBubbleImage,
  StItemBubbleText,
  ScrollPage,
} from "./style";
import { Button } from "../../../../components";

export const ListItemBubble = ({
  imageUrl = "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/163413022650162731.jpg?gif=1&w=180&h=180&c=c&webp=1",
  brand = "브랜드없음",
  name = "이름없음",
  onClickFunction = () => {},
  noButton = false,
}) => {
  return (
    <>
      <ScrollPage>
        {" "}
        <ItemDetailBubbleLayout onClick={onClickFunction}>
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
