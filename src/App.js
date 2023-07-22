import {
  Button,
  GrayBtn,
  WriteBtn,
  BuyBtn,
  BucketBtn,
  LoginBtn,
  EmailBtn,
  SignUpBtn,
  AskBtn,
} from "./components/shared/Button";
import { WhiteButton } from "./components/shared/ButtonStyle";
import { FlexButton } from "./components/shared/FlexButton/FlexButton";
import "./reset.css";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <FlexButton $background="filled" $line="thin">
        hihihihihi
      </FlexButton>
      <div style={{ paddingTop: 20 }}>잉메일 버튼</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          border: "1px solid black",
        }}
      >
        <div style={{ backgroundColor: "" }}></div>
        <FlexButton>test</FlexButton>
      </div>

      <div style={{ paddingTop: 20 }}>잉메일 버튼</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          border: "1px solid black",
        }}
      >
        <div style={{ backgroundColor: "" }}></div>
        <FlexButton $background="filled" $line="thin">
          dfsdfasdasdasdasdasd
        </FlexButton>
      </div>

      <div style={{ margin: 100, border: "1px solid red" }}>
        <div>반응형</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "blue" }}></div>
          <Button>asdf</Button>
        </div>

        <div style={{ paddingTop: 20 }}>회색고정버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "blue" }}></div>
          <GrayBtn>asdf</GrayBtn>
        </div>

        <div style={{ paddingTop: 20 }}>글쓰기 버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "" }}></div>
          <WriteBtn>글쓰기</WriteBtn>
        </div>

        <div style={{ paddingTop: 20 }}>구매하기 버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <BuyBtn>구매하기</BuyBtn>
          <BucketBtn>장바구기</BucketBtn>
        </div>

        <div style={{ paddingTop: 20 }}>로그인 버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "" }}></div>
          <LoginBtn>로그인</LoginBtn>
        </div>

        <div style={{ paddingTop: 20 }}>회원가입 버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "" }}></div>
          <SignUpBtn>회원가입</SignUpBtn>
        </div>

        <div style={{ paddingTop: 20 }}>잉메일 버튼</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "" }}></div>
          <EmailBtn>이메일 인증하기</EmailBtn>
        </div>

        <div style={{ paddingTop: 20 }}>구매하기 버튼</div>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
          }}
        >
          <WhiteButton style={{ flex: 1 }}>우링리우리</WhiteButton>
          <AskBtn style={{ flex: 1 }}>문의하기</AskBtn>
        </div>

        <div>df</div>
      </div>
    </>
  );
};
