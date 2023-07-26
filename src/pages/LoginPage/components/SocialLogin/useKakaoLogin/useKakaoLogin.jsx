import { useCallback } from "react";
import axios from "axios";

// Kakao Login Custom Hook
export const useKakaoLogin = (REST_API_KEY, REDIRECT_URI) => {
  const kakaoLoginApi = useCallback(
    async (code) => {
      console.log("kakaoLoginApi function called");

      const requestBody = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
      });

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      };

      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        requestBody,
        config
      );

      return response.data;
    },
    [REST_API_KEY, REDIRECT_URI]
  );

  const handleKakaoLogin = useCallback(() => {
    window.Kakao.Auth.login({
      success: async function (authObj) {
        // 로그인 성공시, API를 호출합니다.
        const userInfo = await window.Kakao.API.request({
          url: "/v2/user/me",
        });

        // 카카오 API에서 받은 사용자 정보를 서버에 전송합니다.
        const serverResponse = await kakaoLoginApi(authObj.code);
        console.log("Server response: ", serverResponse);
      },
      fail: function (err) {
        console.error(err);
      },
    });
  }, [kakaoLoginApi]);

  return handleKakaoLogin;
};
