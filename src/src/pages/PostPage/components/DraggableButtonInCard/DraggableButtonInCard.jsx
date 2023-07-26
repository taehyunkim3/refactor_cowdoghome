import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ImageTagModal } from "./tagmodal";
import { styled } from "styled-components";
import { CircleButton } from "../../../../components";
import { useComponentSize } from "../../hooks";

export const DraggableButtonInCard = ({ fileUrl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const addButtonRef = useRef(null);
  const initialState = {
    tagsId: [],
    axisX: [],
    axisY: [],
    selectedItems: [],
    modalVisible: [],
    percentX: [],
    percentY: [],
  };
  const [tagData, setTagData] = useState(initialState);
  const [componentRef, size] = useComponentSize(fileUrl);
  // const [modalVisible, setModalVisible] = useState([]);

  const addNewButton = (e) => {
    if (!isEditing || tagData.modalVisible.some((vis) => vis)) return;
    if (tagData.tagsId.length >= 5)
      return alert("태그는 최대 5개까지 추가할 수 있습니다.");
    const divRect = componentRef.current.getBoundingClientRect();
    const x = e.clientX - divRect.x;
    const y = e.clientY - divRect.y;
    console.log(JSON.stringify(tagData));

    // const x = componentRef.current?.clientWidth ?? 0;
    // const y = componentRef.current?.clientHeight ?? 0;

    setTagData((prevData) => ({
      tagsId: [...prevData.tagsId, prevData.tagsId.length],
      axisX: [...prevData.axisX, x],
      axisY: [...prevData.axisY, y],
      percentX: [
        ...prevData.percentX,
        ((Number(x) / size.width) * 100).toFixed(2),
      ],
      percentY: [
        ...prevData.percentY,
        ((Number(y) / size.height) * 100).toFixed(2),
      ],
      selectedItems: [...prevData.selectedItems, null],
      modalVisible: [...prevData.modalVisible, false],
    }));

    // setModalVisible((prevVisible) => [...prevVisible, true]);
  };

  const toggleModal = (index) => {
    setTagData((prevData) => ({
      ...prevData,
      modalVisible: prevData.modalVisible.map((vis, idx) =>
        idx === index ? !vis : vis
      ),
    }));
    // setModalVisible((prevVisible) =>
    //   prevVisible.map((vis, idx) => (idx === index ? !vis : vis))
    // );
  };

  const handleSelect = (index, item) => {
    setTagData((prevData) => ({
      ...prevData,
      selectedItems: prevData.selectedItems.map((val, idx) =>
        idx === index ? item : val
      ),
    }));
    toggleModal(index);
    console.log(tagData);
  };

  const handleDrag = (index, e, data) => {
    setTagData((prevData) => ({
      ...prevData,
      axisX: prevData.axisX.map((val, idx) => (idx === index ? data.x : val)),
      axisY: prevData.axisY.map((val, idx) => (idx === index ? data.y : val)),
      percentX: prevData.percentX.map((val, idx) =>
        idx === index ? ((Number(data.x) / size.width) * 100).toFixed(2) : val
      ),
      percenY: prevData.percentX.map((val, idx) =>
        idx === index ? ((Number(data.y) / size.height) * 100).toFixed(2) : val
      ),
    }));
  };
  console.log(fileUrl);

  return (
    <>
      <div
        style={{
          width: "430px",
        }}
      >
        <StDragContainer
          //   ref={addButtonRef}
          onClick={addNewButton}
          ref={componentRef}
        >
          <StDragImage src={fileUrl} alt="Background Image" />
          {tagData.tagsId.map((tagId, index) => (
            <Draggable
              position={{ x: tagData.axisX[index], y: tagData.axisY[index] }}
              bounds="parent"
              onStop={(e, data) => handleDrag(index, e, data)}
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
                  //   if (!modalVisible[index]) {
                  toggleModal(index);
                  //   }
                }}
              >
                <CircleButton
                  type="small"
                  icon="plus"
                  onClick={(e) => {
                    if (!isEditing || tagData.modalVisible[index]) {
                      e.stopPropagation();
                      toggleModal(index);
                    }
                  }}
                />

                {tagData.modalVisible[index] && (
                  <ImageTagModal
                    closeModal={() => toggleModal(index)}
                    selectedItem={tagData.selectedItems[index]}
                    setSelectedItem={(item) => handleSelect(index, item)}
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

  height: 100%;
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
  height: 100%;
  object-fit: cover;
`;

const StButton = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: none rgb(53, 197, 240);
  position: absolute;
  bottom: 13px;
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
  bottom: 13px;
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
