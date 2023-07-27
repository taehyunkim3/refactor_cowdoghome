import { Button, CircleImage } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { SignUpLayout } from "./layout";
import {
  ContentWrapper,
  LoginSpan,
  QuestionText,
  QusetionBox,
  SNSBox,
  SNSList,
  SNSLists,
  SNSTitle,
  Title,
  TitleBox,
} from "./style";
import { EmailForm, InputForm } from "./components";
import { useEffect, useState } from "react";
import { ErrorMsg } from "./components/InputForm/style";
import axios from "axios";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState({
    email: null,
    password: null,
    passwordConfirm: null,
    nickname: null,
  });

  useEffect(() => {
    if (password.length < 8) {
      setError((prev) => ({
        ...prev,
        password: "비밀번호는 8자 이상이어야 합니다.",
      }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
  }, [password]);

  useEffect(() => {
    if (confirm === "") {
      setError((prev) => ({ ...prev, confirm: "" }));
    } else if (password !== confirm) {
      setError((prev) => ({
        ...prev,
        confirm: "비밀번호가 일치하지 않습니다.",
      }));
    } else {
      setError((prev) => ({ ...prev, passwordConfirm: "" }));
    }
  }, [password, confirm]);

  const validateEmail = (input) => {
    const re = /^[\w.-]+@[\w.-]+\.(co\.kr|com|net)$/;
    return re.test(String(input).toLowerCase());
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    if (!newEmail) {
      setError((prev) => ({
        ...prev,
        email: "이메일을 입력해주세요.",
      }));
    } else if (!validateEmail(`${newEmail}@${domain}`)) {
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleDomainChange = (newDomain) => {
    setDomain(newDomain);
    if (!newDomain) {
      setError((prev) => ({ ...prev, email: "도메인을 입력해주세요." }));
    } else if (!validateEmail(`${email}@${newDomain}`)) {
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
    } else {
      setError((prev) => ({ ...prev, email: null }));
    }
  };

  const registerUser = async (userData) => {
    console.log("Calling registerUser with user data: ", userData);
    try {
      const response = await axios.post(
        "https://cowdoghome.store/api/register",
        userData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };
  const handleRegister = async () => {
    console.log("handleRegister is called");
    if (
      !email ||
      !domain ||
      !password ||
      !confirm ||
      !nickname ||
      error.nickname
    ) {
      alert("모든 필드를 채우고 유효성 검사를 통과해야 합니다.");
      return;
    }
    const user = {
      email: `${email}@${domain}`,
      nickname,
      password,
      confirm,
    };

    console.log("Calling mutation with user data: ", user);

    try {
      const response = await registerUser(user);
      console.log("Registration succeeded, navigating to login page.");
      navigate("/login");
    } catch (error) {
      console.error("Error in registration, not navigating.", error);
      if (error.response && error.response.status === 409) {
        // If status code is 409, show specific error message and don't navigate.
        console.log("Registration conflict. User might already exist.");
        setError((prev) => ({
          ...prev,
          general: error.response.data.errorMessage,
        }));
      } else {
        // For other status codes, perform generic error handling.
        setError((prev) => ({
          ...prev,
          general: error.message || error.toString(),
        }));
      }
    }
  };

  return (
    <SignUpLayout>
      <ContentWrapper>
        <TitleBox>
          <Title>회원가입</Title>
          <SNSBox>
            <SNSTitle>SNS계정으로 간편하게 회원가입</SNSTitle>
            <SNSLists>
              <SNSList>
                {/* 연결될 link 추가해주시면 됩니다! */}
                <Link to="">
                  <CircleImage type="facebook" />
                </Link>
              </SNSList>
              <SNSList>
                <Link to="">
                  <CircleImage type="kakao" />
                </Link>
              </SNSList>
              <SNSList>
                <Link to="">
                  <CircleImage type="naver" />
                </Link>
              </SNSList>
            </SNSLists>
          </SNSBox>
        </TitleBox>
        <div>
          <EmailForm
            onEmailChange={handleEmailChange}
            onDomainChange={handleDomainChange}
          >
            {error.email && <ErrorMsg style={{}}>{error.email}</ErrorMsg>}
          </EmailForm>
        </div>
        <div>
          <InputForm
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            onChange={(value) => setPassword(value)}
            error={error.password}
          />
        </div>
        <div>
          <InputForm
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            onChange={(value) => setConfirm(value)}
            error={error.passwordConfirm}
          />
        </div>
        <div>
          <InputForm
            title="닉네임"
            placeholder="별명 (2~15자)"
            msg="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
            name="nickname"
            onChange={(value) => setNickname(value)}
            error={error.nickname}
            generalError={error.general}
          />
        </div>

        <Button
          label="회원가입하기"
          theme="filled"
          size="large"
          b
          onClick={handleRegister}
        />

        <QusetionBox>
          <QuestionText>이미 아이디가 있으신가요?</QuestionText>
          <LoginSpan
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LoginSpan>
        </QusetionBox>
      </ContentWrapper>
    </SignUpLayout>
  );
};
