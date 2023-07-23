import { CowDogHomeIcon } from "../../components/shared/Header/CowDogHomeIcon";
import {
  ErrorText,
  LoginBox,
  LoginLayout,
  LogoBox,
  NonMembersBox,
  UserAccountBtn,
  UserAccountForm,
} from "./style";
import LoginForm from "../../components/pages/LoginPage/LoginForm/LoginForm";
import SocialLogin from "../../components/pages/LoginPage/SocialLogin/SocialLogin";

export const LoginPage = () => {
  return (
    <LoginLayout>
    <LoginBox>
      <LogoBox>
        <CowDogHomeIcon />
      </LogoBox>
      <LoginForm/>
      <UserAccountForm>
        <UserAccountBtn>비밀번호 재설정</UserAccountBtn>
        <UserAccountBtn>회원가입</UserAccountBtn>
      </UserAccountForm>
      <SocialLogin />
      <ErrorText>로그인에 문제가 있으신가요?</ErrorText>
      <NonMembersBox>비회원 주문하기</NonMembersBox>
    </LoginBox>
  </LoginLayout>
  );
};
