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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../api/signUpApi";
import { ErrorMsg } from "./components/InputForm/style";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(registerUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("");
      console.log("success");
    },
    onError: (error) => {
      console.log("Error", error.message);
    },
  });

  const validateEmail = (input) => {
    const re = /^[\w.-]+@[\w.-]+\.(co\.kr|com|net)$/;
    return re.test(String(input).toLowerCase());
  };

  useEffect(() => {
    if (!validateEmail(`${email}@${domain}`)) {
      setError("유효한 이메일을 입력해주세요.");
    } else if (password !== passwordConfirm) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [email, domain, password, passwordConfirm]);

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    if (!validateEmail(`${newEmail}@${domain}`)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const handleDomainChange = (newDomain) => {
    setDomain(newDomain);
    if (!validateEmail(`${email}@${newDomain}`)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const handleRegister = () => {
    if (error) {
      alert(error);
      return;
    }
    mutation.mutate({ email: `${email}@${domain}`, password, nickname });
    navigate("/login");
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
            {error && <ErrorMsg style={{}}>{error}</ErrorMsg>}
          </EmailForm>
        </div>
        <div>
          <InputForm
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            onChange={(value) => setPassword(value)}
          />
        </div>
        <div>
          <InputForm
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            msg="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            onChange={(value) => setPasswordConfirm(value)}
          />
        </div>
        <div>
          <InputForm
            title="닉네임"
            placeholder="별명 (2~15자)"
            msg="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
            onChange={(value) => setNickname(value)}
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
          <LoginSpan>로그인</LoginSpan>
        </QusetionBox>
      </ContentWrapper>
    </SignUpLayout>
  );
};
