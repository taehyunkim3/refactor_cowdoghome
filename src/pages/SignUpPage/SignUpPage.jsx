// @ts-nocheck
import styled from "styled-components";
import { Button, CircleImage, EmailForm, InputForm } from "../../components";
import { Link } from "react-router-dom";
import { SignUpLayout } from "./layout";

export const SignUpPage = ({}) => {
  return (
    <SignUpLayout>
      <ContentWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "rgb(66, 66, 66)",
              fontSize: "20px",
            }}
          >
            회원가입
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "30px 0",
              paddingBottom: "30px",
              borderBottom: "1px solid rgb(237, 237, 237)",
            }}
          >
            <span
              style={{
                color: "rgb(117, 117, 117)",
                fontSize: "12px",
                margin: "15px 0",
                textAlign: "center",
              }}
            >
              SNS계정으로 간편하게 회원가입
            </span>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <li style={{ margin: "0 10px" }}>
                {/* 연결될 link 추가해주시면 됩니다! */}
                <Link to="">
                  <CircleImage type="facebook" />
                </Link>
              </li>

              <li style={{ margin: "0 10px" }}>
                <Link to="">
                  <CircleImage type="kakao" />
                </Link>
              </li>

              <li style={{ margin: "0 10px" }}>
                <Link to="">
                  <CircleImage type="naver" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <EmailForm />
        </div>

        <div>
          <InputForm
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
          />
        </div>

        <div>
          <InputForm
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
          />
        </div>

        <div>
          <InputForm
            title="닉네임"
            placeholder="별명 (2~15자)"
            msg="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
          />
        </div>

        <Button label="회원가입하기" theme="filled" size="large" b />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <p
            style={{
              color: "#424242",
              fontSize: "15px",
              textAlign: "center",
              letterSpacing: "-0.4px",
            }}
          >
            이미 아이디가 있으신가요?
          </p>
          <Link to="/login">
            <LoginSpan>로그인</LoginSpan>
          </Link>
        </div>
      </ContentWrapper>
    </SignUpLayout>
  );
};

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const LoginSpan = styled.span`
  text-decoration: underline;
  font-weight: 700;
  font-size: 15px;
  padding-left: 10px;
  text-align: center;
  letter-spacing -0.4px;
  color: rgb(66, 66, 66);

  &:hover {
    color: #7a7a7a;
  }
`;
