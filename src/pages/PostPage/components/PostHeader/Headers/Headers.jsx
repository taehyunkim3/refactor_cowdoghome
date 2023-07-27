import { useState, useEffect, useContext } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { ButtonBox, HeaderBox, PostButtonBox, LogoContainer } from "./style";
import { CowDogHomeIcon } from "../CowDogHomeIcon";
import { Button } from "../../../../../components";
import { Link, useNavigate } from "react-router-dom";
import { PostPageContext } from "../../../contexts/PostPageContext";

export const Headers = ({}) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { onSubmitHandler, postData } = useContext(PostPageContext);
  const isFilled = postData?.content && postData?.imgUrl;
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
            <PostButtonBox width="8rem" onClick={handleHousePost}>
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
