import { Footer } from "../../components";
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

  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  const handlePasswordReset = () => {
    window.alert("비밀번호 재설정 불가지롱😝");
  };

  const handleNoMemberOrder = () => {
    window.alert("비회원은 주문 못하지롱😝");
  };

  const handleProblemLogin = () => {
    window.alert("저런...인스타로 문의 부탁드려요...🙏");
  };

  return (
    <Footer>
      <LoginLayout>
        <LoginBox>
          <LogoBox>
            <div onClick={handleGoToHome}>
              <CowDogHomeIcon />
            </div>
          </LogoBox>
          <LoginForm />
          <UserAccountForm>
            <UserAccountBtn onClick={handlePasswordReset}>
              비밀번호 재설정 |
            </UserAccountBtn>
            <UserAccountBtn onClick={handleGoToSignUp}>
              회원가입
            </UserAccountBtn>
          </UserAccountForm>
          <SocialLogin />
          <ErrorText onClick={handleProblemLogin}>
            로그인에 문제가 있으신가요?
          </ErrorText>
          <NonMembersBox onClick={handleNoMemberOrder}>
            비회원 주문하기
          </NonMembersBox>
        </LoginBox>
      </LoginLayout>
    </Footer>
  );
};
