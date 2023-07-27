import { useState, useEffect, useContext } from "react";
import { ButtonBox, HeaderBox, PostButtonBox, LogoContainer } from "./style";
import { CowDogHomeIcon } from "../CowDogHomeIcon";
import { Button } from "../../../../../components";
import { Link } from "react-router-dom";
import { PostPageContext } from "../../../contexts/PostPageContext";

export const Headers = ({}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { onSubmitHandler, postData } = useContext(PostPageContext);
  const isFilled = postData?.content && postData?.imgUrl;
  // ⬇️ 윈도우 사이즈 변경 감지
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // ⬇️ 올리기 버튼 클릭
  const handleHousePost = (e) => {
    onSubmitHandler(e);
  };

  return (
    <HeaderBox>
      {windowWidth < 768 ? (
        <>
          <Link to="/">
            <CowDogHomeIcon />
          </Link>
          <PostButtonBox width="5.5em" onClick={handleHousePost}>
            <Button
              theme={isFilled ? "filled" : "gray"}
              size="large"
              label="올리기"
            />
          </PostButtonBox>
        </>
      ) : (
        <>
          <LogoContainer>
            <Link to="/">
              <CowDogHomeIcon />
            </Link>
          </LogoContainer>

          <ButtonBox>
            <PostButtonBox width="12rem" onClick={handleHousePost}>
              <Button
                theme={isFilled ? "filled" : "gray"}
                size="large"
                label="올리기"
              />
            </PostButtonBox>
          </ButtonBox>
        </>
      )}
    </HeaderBox>
  );
};
