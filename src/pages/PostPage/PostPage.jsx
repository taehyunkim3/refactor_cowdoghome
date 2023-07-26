import { Header } from "../../components";
import { CommonLayout, MainLayoutInner } from "./style";
import { InputFile, PostHeader } from "./components";
import { useState } from "react";
import { PostPageContext } from "./contexts/PostPageContext";
import { postHousePost } from "../../api/houseApi"; // 이 부분은 실제 API 함수 파일 위치로 변경
import { useNavigate } from "react-router-dom";

export const PostPage = ({}) => {
  const navigate = useNavigate();
  const [itemData, setitemData] = useState({
    tagsId: [],
    percentX: [],
    percentY: [],
  });
  const [postData, setPostData] = useState({
    content: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("👦🏾" + JSON.stringify(itemData));
    const formedItemData = Object.values(itemData)
      .filter((item) => item.itemId != null)
      .map((item) => ({
        itemId: item.itemId,
        x: item.percentX,
        y: item.percentY,
      }));
    if (formedItemData.length === 0) {
      alert("아이템을 등록해주세요.");
      return;
    }

    const payload = {
      ...postData,
      itemData: formedItemData,
    };
    try {
      const response = await postHousePost(payload);
      console.log("👁️" + JSON.stringify(response));
      alert("성공적으로 등록되었습니다.");
      navigate(`/house/${response.details.detailsId}`);
    } catch (error) {
      console.error("😀" + error);
    }
    console.log(`PostPage🐼/onSubmitHandler/${JSON.stringify(payload)}`);
  };

  return (
    <PostPageContext.Provider
      value={{
        postData,
        setPostData,
        itemData,
        setitemData,
        onSubmitHandler,
      }}
    >
      <CommonLayout>
        <PostHeader />
        <MainLayoutInner>
          <InputFile />
        </MainLayoutInner>
      </CommonLayout>
    </PostPageContext.Provider>
  );
};
