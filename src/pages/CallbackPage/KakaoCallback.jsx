// src/components/Callbackpage/kakaoCallback.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const KakaoCallback = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [authCode, setAuthCode] = useState(params.get("code"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token`,
          `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        if (res.data.access_token) {
          console.log(res.data);

          // 백엔드 서버로 보낼 토큰을 정의
          const tokenToSend = res.data.access_token;

          // 백엔드 서버로 토큰을 보내고 응답을 받는 부분
          const serverResponse = await axios({
            method: "post",
            url: `https://cowdoghome.store/api/login/kakao`,
            headers: { Cowdog: tokenToSend },
          });

          // const serverResponse = await axios.post(
          //   "https://cowdoghome.store/api/login/kakao",
          //   {}, // 두 번째 파라미터는 보내는 데이터로, 토큰이 헤더에 포함되므로 여기선 비어있어도 됩니다.
          //   {
          //     headers: {
          //       cowdog: tokenToSend,
          //     },
          //   }
          // );

          // 응답 확인
          console.log("Server response: ", serverResponse.data);

          if (serverResponse.data.access_token) {
            console.log(serverResponse.data.access_token);
            localStorage.setItem("token", serverResponse.data.access_token);
            alert("WELCOME");
          } else {
            alert("NONONO");
          }
        }

        // if (res.data.access_token) {
        //   console.log(res.data.access_token);
        //   const result = await axios.get(
        //     "https://cowdoghome.store/api/login/kakao",
        //     {
        //       headers: {
        //         "cowdog": res.data.access_token,
        //       },
        //     }
        //   );

        //   if (result.data.access_token) {
        //     console.log(result.data.access_token);
        //     localStorage.setItem("token", result.data.access_token);
        //     alert("WELCOME");
        //   } else {
        //     alert("NONONO");
        //   }
        // }
      } catch (error) {
        console.error("Error during the Kakao login:", error);
      }
    };

    if (authCode) {
      fetchData();
    }
  }, [authCode]);

  return <></>;
};
