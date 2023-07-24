import { useState } from "react";
import {
  SelectorWrapper,
  SelectorStyle,
  SpanStyle,
  IconStyle,
  Input,
  ErrorMsg,
} from "./style";
import { Button } from "../../../shared";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (input) => {
    // 이메일 유효성 검사 규칙
  };

  return (
    <>
      <b style={{ marginBottom: "12px" }}>이메일</b>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "40px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <span style={{ color: "#dbdbdb", fontSize: "15px", margin: "2px" }}>
          @
        </span>
        <SelectorWrapper>
          <SelectorStyle
            value={domain}
            onChange={(e) => {
              console.log(e.target.value);
              setDomain(e.target.value);
            }}
          >
            <option value="">선택해주세요</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            {/* 도메인 추가 시 여기에 추가해주시면 됩니다! */}
          </SelectorStyle>
          <SpanStyle>
            <IconStyle
              width="10"
              height="10"
              preserveAspectRatio="xMidYMid meet"
            >
              <path fillRule="evenodd" d="M0 3l5 5 5-5z"></path>
            </IconStyle>
          </SpanStyle>
        </SelectorWrapper>
      </div>
      <ErrorMsg>{error}</ErrorMsg>
      <div style={{ marginBottom: "30px", paddingTop: "2px" }}>
        <Button label="이메일 인증하기" theme="gray" size="large" b />
      </div>
    </>
  );
};
