import styled from "styled-components";
import { SignUpLayout } from "./layout";
import { Button, CircleImage, EmailForm, InputForm } from "../../components";
import { Link } from "react-router-dom";

export const SignUpPage = ({}) => {
  return (
    <SignUpLayout>
      <ContentWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid gray",
          }}
        >
          <b>회원가입</b>
          <div>
            <span>SNS계정으로 간편하게 회원가입</span>
            <div>
              <CircleImage type="kakao" />
              <CircleImage type="naver" />
            </div>
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
            style={{ color: "#424242", fontSize: "15px", textAlign: "center" }}
          >
            이미 아이디가 있으신가요?
          </p>
          <Link to="/login">
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "15px",
                paddingLeft: "10px",
                textAlign: "center",
                color: "rgb(66, 66, 66)",
              }}
            >
              로그인
            </span>
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
