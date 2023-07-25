import React from "react";
import { CircleButton, ItemDetailBubble } from "../../../../components";
import { useNavigate } from "react-router-dom";

export const OnPositionBubble = ({
  top,
  left,
  itemId,
  name,
  brand,
  price,
  imageUrl,
  icon = "plus",
  type = "small",
}) => {
  let bubbleX = "5%";
  let bubbleY;

  if (parseInt(top) >= 85 && parseInt(left) >= 50) {
    bubbleX = "-100%";
    bubbleY = "-120%";
  } else if (parseInt(top) >= 85) {
    bubbleX = "5%";
    bubbleY = "-120%";
  } else if (parseInt(left) >= 50) {
    bubbleX = "-100%";
  }
  const navigate = useNavigate();
  return (
    <div style={{ position: "absolute", top: top, left: left }}>
      <CircleButton icon={icon} type={type} />
      <ItemDetailBubble
        x={bubbleX}
        y={bubbleY}
        name={name}
        brand={brand}
        price={price}
        imageUrl={imageUrl}
        onClick={() => {
          navigate(`/item/${itemId}`);
        }}
      />
    </div>
  );
};
