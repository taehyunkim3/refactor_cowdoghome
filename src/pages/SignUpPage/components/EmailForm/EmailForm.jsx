import { useState } from "react";
import {
  SelectorWrapper,
  SelectorStyle,
  SpanStyle,
  IconStyle,
  Input,
} from "./style";
import { Button } from "../../../../components";

export const EmailForm = ({ onEmailChange, onDomainChange, children }) => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [isCustomDomain, setIsCustomDomain] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    onEmailChange(e.target.value);
  };

  const handleDomainChange = (e) => {
    if (e.target.value === "custom") {
      setIsCustomDomain(true);
    } else {
      setIsCustomDomain(false);
      setDomain(e.target.value);
      onDomainChange(e.target.value);
    }
  };

  const handleCustomDomainChange = (e) => {
    setDomain(e.target.value);
    onDomainChange(e.target.value);
  };

  return (
    <>
      <b
        style={{
          marginBottom: "12px",
          display: "flex",
          color: "rgb(47, 52, 56)",
          fontSize: "16px",
        }}
      >
        이메일
      </b>
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
            onBlur={handleEmailChange}
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
            onBlur={handleDomainChange}
          >
            <option value="">선택해주세요</option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.com">hanmail.com</option>
            <option value="daum.net">daum.net</option>
            <option value="gmail.com">gmail.com</option>
            <option value="nate.com">nate.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="icloud.com">icloud.com</option>
          </SelectorStyle>
          {children}
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
      <div
        style={{ marginTop: "20px", marginBottom: "30px", paddingTop: "2px" }}
      >
        <Button label="이메일 인증하기" theme="gray" size="large" b />
      </div>
    </>
  );
};
