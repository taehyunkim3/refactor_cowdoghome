import React, { useState, useEffect } from "react";
import { InputContainer } from "../InputContainer/InputContainer";
import { CowDogHomeIcon } from "./CowDogHomeIcon";
import {
  HeaderBox,
  SignBox,
  SignBtn,
  PostBtn,
  ButtonBox,
  iconStyle,
  HeaderContainer,
} from "./style";
import { LiaSearchSolid } from "react-icons/lia";
import { NavBar } from "./NavBar";

export const Header = () => {
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

  return (
    <HeaderContainer>
      <HeaderBox>
        {windowWidth < 768 ? (
          <>
            <SignBox>
              <SignBtn>로그인</SignBtn>
              <SignBtn>회원가입</SignBtn>
            </SignBox>
            <CowDogHomeIcon />
            <PostBtn>글쓰기</PostBtn>
          </>
        ) : (
          <>
            <CowDogHomeIcon />
            <InputContainer width="188.34" height="40" placeholder="통합검색">
              <LiaSearchSolid style={iconStyle} />
            </InputContainer>
            <ButtonBox>
              <SignBox>
                <SignBtn>로그인</SignBtn>
                <SignBtn>회원가입</SignBtn>
              </SignBox>
              <PostBtn>글쓰기</PostBtn>
            </ButtonBox>
          </>
        )}
      </HeaderBox>
      <NavBar></NavBar>
    </HeaderContainer>
  );
};
