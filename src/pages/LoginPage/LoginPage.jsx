import { useState } from "react";
import { Button, CircleImage, InputContainer } from "../../components/shared";
import { CowDogHomeIcon } from "../../components/shared/Header/CowDogHomeIcon";
import {
  ErrorText,
  FormBox,
  LoginBox,
  LoginLayout,
  LogoBox,
  NonMembersBox,
  SNSLoginBox,
  SNSLoginBtn,
  SNSLoginText,
  UserAccountBtn,
  UserAccountForm,
} from "./style";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/loginApi";
import { loginFailed, loginStart, loginSuccess } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(loginApi, {
    onError: (error) => {
      dispatch(loginFailed(error.message));
    },
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      navigate("/");
    },
  });

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValueUadate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dispatching loginStart");
    dispatch(loginStart());
    mutation.mutate(formValues);
  };

  return (
    <LoginLayout>
      <LoginBox>
        <LogoBox>
          <CowDogHomeIcon />
        </LogoBox>
        <FormBox>
          <InputContainer
            placeholder="이메일"
            type="email"
            onChange={handleValueUadate}
          />
          <InputContainer
            placeholder="비밀번호"
            type="password"
            onChange={handleValueUadate}
          />
          <Button onClick={handleSubmit}>로그인</Button>
        </FormBox>
        <UserAccountForm>
          <UserAccountBtn>비밀번호 재설정</UserAccountBtn>
          <UserAccountBtn>회원가입</UserAccountBtn>
        </UserAccountForm>
        <SNSLoginBox>
          <SNSLoginText>SNS계정으로 간편 로그인/회원가입</SNSLoginText>
          <SNSLoginBtn>
            <CircleImage type="facebook" />
          </SNSLoginBtn>
          <SNSLoginBtn>
            <CircleImage type="kakao" />
          </SNSLoginBtn>
          <SNSLoginBtn>
            <CircleImage type="naver" />
          </SNSLoginBtn>
        </SNSLoginBox>
        <ErrorText>로그인에 문제가 있으신가요?</ErrorText>
        <NonMembersBox>비회원 주문하기</NonMembersBox>
      </LoginBox>
    </LoginLayout>
  );
};
