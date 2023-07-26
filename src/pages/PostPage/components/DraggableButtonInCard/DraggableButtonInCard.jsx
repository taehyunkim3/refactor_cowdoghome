import Draggable from "react-draggable";
import { ImageTagModal } from "./tagmodal";

import { PostPageContext } from "../../contexts/PostPageContext";

import { useContext, useEffect, useRef, useState } from "react";
import { useComponentSize } from "../../hooks";
import { styled } from "styled-components";
import { CircleButton } from "../../../../components";
export const DraggableButtonInCard = ({ fileUrl }) => {
  const { itemData, setitemData } = useContext(PostPageContext);
  const [isEditing, setIsEditing] = useState(false);
  const addButtonRef = useRef(null);
  const initialState = {};
  const [tagData, setTagData] = useState(initialState);
  const [componentRef, size] = useComponentSize(fileUrl);

  const addNewButton = (e) => {
    if (!isEditing || Object.values(tagData).some((tag) => tag.modalVisible))
      return;
    if (Object.keys(tagData).length >= 5)
      return alert("태그는 최대 5개까지 추가할 수 있습니다.");
    const divRect = componentRef.current.getBoundingClientRect();
    const x = e.clientX - divRect.x;
    const y = e.clientY - divRect.y;

    setTagData((prevData) => {
      const newTagId = Object.keys(prevData).length;
      return {
        ...prevData,
        [newTagId]: {
          axisX: x,
          axisY: y,
          percentX: Number(((Number(x) / size.width) * 100).toFixed(2)),
          percentY: Number(((Number(y) / size.height) * 100).toFixed(2)),
          selectedItems: null,
          modalVisible: false,
          itemId: null,
        },
      };
    });
    setitemData(tagData);
  };

  const toggleModal = (tagId) => {
    setTagData((prevData) => ({
      ...prevData,
      [tagId]: {
        ...prevData[tagId],
        modalVisible: !prevData[tagId].modalVisible,
      },
    }));
  };

  const handleSelect = (tagId, item) => {
    setTagData((prevData) => ({
      ...prevData,
      [tagId]: {
        ...prevData[tagId],
        selectedItems: item,
        itemId: item.itemId,
      },
    }));
    toggleModal(tagId);
  };
  //
  useEffect(() => {
    setitemData(tagData);
  }, [tagData]);
  //
  const handleDrag = (tagId, e, data) => {
    setTagData((prevData) => ({
      ...prevData,
      [tagId]: {
        ...prevData[tagId],
        axisX: data.x,
        axisY: data.y,
        percentX: Number(((Number(data.x) / size.width) * 100).toFixed(2)),
        percentY: Number(((Number(data.y) / size.height) * 100).toFixed(2)),
      },
    }));
    setitemData(tagData);
  };

  return (
    <>
      <div
        style={{
          width: "430px",
        }}
      >
        <StDragContainer onClick={addNewButton} ref={componentRef}>
          <StDragImage src={fileUrl} alt="Background Image" />
          {Object.keys(tagData).map((tagId) => (
            <Draggable
              position={{ x: tagData[tagId].axisX, y: tagData[tagId].axisY }}
              bounds="parent"
              onStop={(e, data) => handleDrag(tagId, e, data)}
              key={tagId}
              disabled={!isEditing}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModal(tagId);
                }}
              >
                <CircleButton
                  type="small"
                  icon="plus"
                  onClick={(e) => {
                    if (!isEditing || tagData[tagId].modalVisible) {
                      e.stopPropagation();
                      toggleModal(tagId);
                    }
                  }}
                />

                {tagData[tagId].modalVisible && (
                  <ImageTagModal
                    closeModal={() => toggleModal(tagId)}
                    selectedItem={tagData[tagId].selectedItem}
                    setSelectedItem={(item) => handleSelect(tagId, item)}
                  />
                )}
              </div>
            </Draggable>
          ))}
          <StButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "편집완료" : "태그편집하기"}
          </StButton>
          <StDelete
            onClick={() => {
              setTagData(initialState);
              setIsEditing(false);
            }}
          >
            🗑️
          </StDelete>
        </StDragContainer>
      </div>
    </>
  );
};

const StDragContainer = styled.div`
  width: 430px;

  height: auto;
  position: absolute;
  cursor: move;
  color: black;

  border-radius: 5px;
  padding: 1em;
  margin: auto;
  user-select: none;
  background: #ffffff;
  flex: 1 1 auto;
  padding: 10px 0px;
  //   overflow: auto;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  z-index: 1;
`;
const StDragImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StButton = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: none rgb(53, 197, 240);
  position: absolute;
  top: 13px;
  left: 50%;
  padding: 7px 12px 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  letter-spacing: -0.3px;
  transform: translateX(-50%);
  border-radius: 100px;
  transition: background-color 0.1s ease 0s;
  z-index: 1;
  cursor: pointer;
`;

const StDelete = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: #ffffff;
  position: absolute;
  top: 13px;
  left: 10%;
  padding: 7px 12px 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  letter-spacing: -0.3px;
  transform: translateX(-50%);
  border-radius: 100px;
  transition: background-color 0.1s ease 0s;
  z-index: 1;
  cursor: pointer;
`;
