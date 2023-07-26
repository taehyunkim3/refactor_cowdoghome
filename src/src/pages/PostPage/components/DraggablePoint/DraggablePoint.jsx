import Draggable from "react-draggable";
import { ListItemBubble } from "../ListItemBubble";
import { useState } from "react";
import { CircleButton } from "../../../../components";
export const DraggablePoint = ({
  id = 0,
  itemId,
  fileUrl,
  height,
  width,
  axisPosition,
  setAxisPosition,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const xAxis = ((Number(position.x.toFixed(0)) / width) * 100).toFixed(2);
  const yAxis = (
    ((Number(position.y.toFixed(0)) + Number(height)) / height) *
    100
  ).toFixed(2);

  const trackPos = (data) => {
    console.log(data);
    console.log("✅" + axisPosition.x + "✅" + axisPosition.y);
    setPosition({ x: data.x, y: data.y });
    setAxisPosition({
      ...axisPosition,
      id: { x: xAxis, y: yAxis, itemId: itemId },
    });
  };
  //

  return (
    <>
      {" "}
      <Draggable onDrag={(e, data) => trackPos(data)}>
        <div>
          {" "}
          <div style={{ transform: "translate(-10px, -10px)" }}>
            {" "}
            <CircleButton type="small" icon="plus" />
          </div>{" "}
          <div className="box">
            <div>BOX</div>
            <div>
              x:
              {((Number(position.x.toFixed(0)) / width) * 100).toFixed(2)}
              %, y:
              {(
                ((Number(position.y.toFixed(0)) + Number(height)) / height) *
                100
              ).toFixed(2)}
              %
            </div>
            <ListItemBubble />
            <ListItemBubble />
            <ListItemBubble />
            <ListItemBubble />
          </div>
        </div>
      </Draggable>
    </>
  );
};
