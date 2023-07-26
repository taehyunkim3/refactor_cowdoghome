import { CowDogHomeIcon } from "../../components/shared/Header/CowDogHomeIcon";
import { LoginForm, SocialLogin } from "./components";
import {
  ErrorText,
  LoginBox,
  LoginLayout,
  LogoBox,
  NonMembersBox,
  UserAccountBtn,
  UserAccountForm,
} from "./style";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <LoginLayout>
      <LoginBox>
        <LogoBox>
          <div onClick={handleGoToHome}>
            <CowDogHomeIcon />
          </div>
        </LogoBox>
        <LoginForm />
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
