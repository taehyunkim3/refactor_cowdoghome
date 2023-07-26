import { useState, useEffect } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import {
  ButtonBox,
  HeaderBox,
  SignBox,
  SignBtn,
  iconStyle,
  PostButtonBox,
  LogoContainer,
  SearchBox,
} from "./style";
import { CowDogHomeIcon } from "../CowDogHomeIcon";
import { InputContainer } from "../../InputContainer/InputContainer";
import { Button } from "../../Button";
import { Link, useNavigate } from "react-router-dom";

export const Headers = ({}) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleHousePost = () => {
    navigate("/house/post");
  };

  return (
    <HeaderBox>
      {windowWidth < 768 ? (
        <>
          <SignBox>
            <SignBtn onClick={handleLogin}>로그인</SignBtn>
            <SignBtn onClick={handleSignUp}>회원가입</SignBtn>
          </SignBox>
          <Link to="/">
            <CowDogHomeIcon />
          </Link>
          <PostButtonBox width="5.5em" onClick={handleHousePost}>
            <Button label="글쓰기" />
          </PostButtonBox>
        </>
      ) : (
        <>
          <LogoContainer>
            <Link to="/">
              <CowDogHomeIcon/>
            </Link>
          </LogoContainer>
          <SearchBox>
            <InputContainer width="188.34" height="40" placeholder="통합검색">
              <LiaSearchSolid style={iconStyle} />
            </InputContainer>
          </SearchBox>
          <ButtonBox>
            <SignBox>
              <SignBtn onClick={handleLogin}>로그인</SignBtn>
              <SignBtn onClick={handleSignUp}>회원가입</SignBtn>
            </SignBox>
            <PostButtonBox width="5.915em" onClick={handleHousePost}>
              <Button label="글쓰기" />
            </PostButtonBox>
          </ButtonBox>
        </>
      )}
    </HeaderBox>
  );
};
