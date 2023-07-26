// SocialLogin.jsx
import { useMutation } from "@tanstack/react-query";
import { SNSLoginBox, SNSLoginBtn, SNSLoginText } from "./style";
import { kakaoLoginApi } from "../../../../api/socialApi";
import { useEffect, useState } from "react";
import { CircleImage } from "../../../../components";

export const SocialLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  console.log(REST_API_KEY, REDIRECT_URI);
  const [code, setCode] = useState(null);

  const mutation = useMutation(
    ([code, REST_API_KEY, REDIRECT_URI]) =>
      kakaoLoginApi(code, REST_API_KEY, REDIRECT_URI),
    {
      onError: (error) => {
        console.log("Mutation Error: ", error);
      },
    }
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setCode(urlParams.get("code"));
  }, []);

  useEffect(() => {
    if (!code) {
      return;
    }
    console.log("Calling mutation...");
    mutation.mutate([code, REST_API_KEY, REDIRECT_URI]);
  }, [code, REST_API_KEY, REDIRECT_URI, mutation]);

  const LoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoClick = () => {
    window.location.href = LoginURL;
  };

  return (
    <SNSLoginBox>
      <SNSLoginText>SNS계정으로 간편 로그인/회원가입</SNSLoginText>
      <div>
        <SNSLoginBtn>
          <CircleImage type="facebook" />
        </SNSLoginBtn>
        <SNSLoginBtn onClick={handleKakaoClick}>
          <CircleImage type="kakao" />
        </SNSLoginBtn>
        <SNSLoginBtn>
          <CircleImage type="naver" />
        </SNSLoginBtn>
      </div>
    </SNSLoginBox>
  );
};
