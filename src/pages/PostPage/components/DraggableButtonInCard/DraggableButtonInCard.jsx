import Draggable from "react-draggable";
import { ImageTagModal } from "./ImageTagModal";
import { PostPageContext } from "../../contexts/PostPageContext";
import { useContext, useEffect, useState } from "react";
import { useComponentSize } from "../../hooks";
import { styled } from "styled-components";
import { CircleButton } from "../../../../components";
export const DraggableButtonInCard = ({ fileUrl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { setPostData, postData } = useContext(PostPageContext);
  const initialState = {};
  const [tagData, setTagData] = useState(initialState);
  const [componentRef, size] = useComponentSize(fileUrl);
  //
  // ⬇️ 새로운 태그 추가
  const addNewButton = (e) => {
    const allModalsClosed = Object.values(tagData).every(
      // 모든 모달이 닫혀있는지 확인
      (tag) => !tag.modalVisible
    );
    const allTagsHaveSelectedItem = Object.values(tagData).every(
      // 모든 태그가 선택된 아이템을 가지고 있는지 확인
      (tag) => tag.selectedItems !== null
    );

    if (!isEditing) {
      console.log("editing모드가 아님");
      return;
    }
    if (!allModalsClosed) {
      console.log("모든 모달이 닫혀있지 않음");
      return;
    }
    // if (!allTagsHaveSelectedItem) {
    //   console.log("모든 태그가 선택된 아이템을 가지고 있지 않음");
    //   return;
    // }  // 이부분을 삭제한 이유 : 모든 아이템을 삭제하는 경우 태그를 추가할 수 없음

    if (Object.keys(tagData).length >= 5) {
      return alert("태그는 최대 5개까지 추가할 수 있습니다.");
    }

    const divRect = componentRef.current.getBoundingClientRect();
    const x = e.clientX - divRect.x;
    const y = e.clientY - divRect.y;

    setTagData((prevData) => {
      console.log("SETTAGDATA🌈" + JSON.stringify(prevData));
      const newTagId = Object.keys(prevData).length;
      const updatedData = {
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
      console.log("🌈🌈🌈" + JSON.stringify(updatedData));
      return updatedData;
    });
  };
  //
  // ⬇️ 모달 토글
  const toggleModal = (tagId) => {
    setTagData((prevData) => ({
      ...prevData,
      [tagId]: {
        ...prevData[tagId],
        modalVisible: !prevData[tagId].modalVisible,
      },
    }));
  };
  //
  // ⬇️ 아이템 선택 시 태그 데이터에 반영
  const handleSelect = (tagId, item) => {
    console.log("HANDLESELECT🔥" + JSON.stringify(tagData));
    const selectedItem = {
      itemId: item.itemId,
      brandName: item.brandName,
      itemName: item.itemName,
      ItemImgLists: item["ItemImgLists.itemImg"]
        ? JSON.parse(item["ItemImgLists.itemImg"])
        : null,
    };
    setTagData((prevData) => ({
      ...prevData,
      [tagId]: {
        ...prevData[tagId],
        selectedItems: selectedItem,
        itemId: item.itemId,
      },
    }));
    toggleModal(tagId);
    console.log("🔥🔥🔥" + JSON.stringify(tagData));
  };
  //
  // ⬇️ 드래그가 끝날 때마다 태그 데이터에 반영
  const handleDrag = (tagId, e, data) => {
    console.log("HANDLEDRAG💧" + JSON.stringify(tagData));
    setTagData((prevData) => {
      const updatedData = {
        ...prevData,
        [tagId]: {
          ...prevData[tagId],
          axisX: data.x,
          axisY: data.y,
          percentX: Number(((Number(data.x) / size.width) * 100).toFixed(2)),
          percentY: Number(((Number(data.y) / size.height) * 100).toFixed(2)),
        },
      };
      return updatedData;
    });
    console.log("💧💧💧" + JSON.stringify(tagData));
  };
  //
  // ⬇️ 태그 데이터가 바뀔 때마다 포스트 데이터에 반영
  useEffect(() => {
    const filteredTagData = Object.values(tagData).filter(
      (tag) => tag.selectedItems !== null
    );
    const formedItemData = filteredTagData.map((tag) => ({
      itemId: tag.itemId,
      x: tag.percentX,
      y: tag.percentY,
    }));
    setPostData({ ...postData, itemData: formedItemData });
  }, [tagData]);
  //
  const handleDeleteTags = () => {
    setTagData(initialState);
  };
  //
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
                    selectedItem={tagData[tagId].selectedItems} // 수정됨
                    setSelectedItem={(item) => handleSelect(tagId, item)}
                  />
                )}
              </div>
            </Draggable>
          ))}
          <StButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "편집완료" : "태그편집하기"}
          </StButton>
          <StDelete onClick={handleDeleteTags}>🗑️</StDelete>
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
  // padding: 1em; 이거때문에 오차 생김
  margin: auto;
  user-select: none;
  background: #ffffff;
  flex: 1 1 auto;
  padding: 0px;
  //   overflow: auto;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  z-index: 1;
`;
const StDragImage = styled.img`
  // position: absolute; 이거때문에 안됨
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
