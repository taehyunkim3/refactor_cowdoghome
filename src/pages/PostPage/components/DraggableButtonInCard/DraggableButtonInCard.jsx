import Draggable from "react-draggable";
import { ImageTagModal } from "../ImageTagModal";
import { PostPageContext } from "../../contexts/PostPageContext";
import { useContext, useEffect, useState } from "react";
import { useComponentSize } from "../../hooks";
import {
  StDragContainer,
  StDragImage,
  StButton,
  StDelete,
  StTag,
  StDragContainerWrapper,
} from "./style";
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

    if (!isEditing) {
      console.log("editing모드가 아님");
      return;
    }
    if (!allModalsClosed) {
      console.log("모든 모달이 닫혀있지 않음");
      return;
    }

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
      <StDragContainerWrapper>
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
              <StTag
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
              </StTag>
            </Draggable>
          ))}
          <StButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "편집완료" : "태그편집하기"}
          </StButton>
          <StDelete onClick={handleDeleteTags}>🗑️</StDelete>
        </StDragContainer>
      </StDragContainerWrapper>
    </>
  );
};
