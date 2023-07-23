import { CircleImage } from "../../../shared";
import { SNSLoginBox, SNSLoginBtn, SNSLoginText } from "./style";

const SocialLogin = () => {
  console.log("SocialLogin");
  return (
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
  );
};

export default SocialLogin;
