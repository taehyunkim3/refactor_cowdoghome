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
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (input) => {
    const re = /^[\w.-]+@[\w.-]+\.(co\.kr|com|net)$/;
    return re.test(String(input).toLowerCase());
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    if (!validateEmail(`${newEmail}@${domain}`))
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
    else setError((prev) => ({ ...prev, email: "" }));
  };

  const handleDomainChange = (newDomain) => {
    setDomain(newDomain);
    if (!validateEmail(`${email}@${newDomain}`))
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
    else setError((prev) => ({ ...prev, email: "" }));
  };

  const mutation = useMutation(registerUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("");
      console.log("success");
    },
    onError: (error) => {
      console.log("Error", error.message);
    },
  });

  const handleRegister = () => {
    if (
      error.email === "" ||
      error.password === "" ||
      error.passwordConfirm === "" ||
      error.nickname === ""
    ) {
      alert("모든 필드를 채우고 유효성 검사를 통과해야 합니다.");
      return;
    }
    mutation.mutate({
      email: `${email}@${domain}`,
      password,
      passwordConfirm,
      nickname,
    });
    navigate("/login");
  };

  useEffect(() => {
    if (password !== passwordConfirm)
      setError((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호가 일치하지 않습니다.",
      }));
    else setError((prev) => ({ ...prev, passwordConfirm: "" }));
  }, [password, passwordConfirm]);

  const handleNicknameChange = (value) => {
    setNickname(value);
    if (value.length < 2) {
      setError((prev) => ({ ...prev, nickname: "2자 이상 입력해주세요." }));
    } else if (value.length > 15) {
      setError((prev) => ({ ...prev, nickname: "15자 이하 입력해주세요." }));
    } else {
      setError((prev) => ({ ...prev, nickname: "" }));
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
            name="nickname"
            onChange={handleNicknameChange}
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
