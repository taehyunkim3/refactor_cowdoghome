import { Header } from "../../components";
import { CommonLayout, MainLayoutInner } from "./style";
import { InputFile, PostHeader } from "./components";
import { useState } from "react";
import { PostPageContext } from "./contexts/PostPageContext";
import { postHousePost } from "../../api/houseApi"; // 이 부분은 실제 API 함수 파일 위치로 변경

export const PostPage = ({}) => {
  const [fileData, setFileData] = useState(null); //삭제예정
  const [itemData, setitemData] = useState({
    tagsId: [],
    percentX: [],
    percentY: [],
  });
  const [postData, setPostData] = useState({
    content: "",
  });
  const [contentData, setContentData] = useState(null); //삭제예정

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formedItemData = itemData.tagsId.map((id, index) => ({
      itemId: id,
      x: itemData.percentX[index],
      y: itemData.percentY[index],
    }));

    const payload = {
      ...postData,
      itemData: formedItemData,
    };
    try {
      const response = await postHousePost(payload);
      console.log("👁️" + response);
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
