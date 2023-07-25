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
          console.log(res.data.access_token);
          const result = await axios.get(
            "https://cowdoghome.store/api/login/kakao",
            {
              headers: {
                Authorization: res.data.access_token,
              },
            }
          );

          if (result.data.access_token) {
            console.log(result.data.access_token)
            localStorage.setItem("token", result.data.access_token);
            alert("WELCOME");
          } else {
            alert("NONONO");
          }
        }
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
