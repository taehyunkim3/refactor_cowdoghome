// socialApi.js
import axios from "axios";

export const kakaoLoginApi = async (code, REST_API_KEY, REDIRECT_URI) => {
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
  };

  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      requestBody,
      config
    );
    // console.log("Server response: ", response.data);

    // return response.data;
  } catch (error) {
    console.error(`Error in kakaoLoginApi: ${error}`);
    alert("카카오 로그인에 실패했습니다." + error);
    if (error.response) {
      console.error(`Error details: ${error.response.data}`);
    }
  }
};

export const refreshToken = async (refreshToken, REST_API_KEY) => {
  console.log("refreshToken function called");
  try {
    const requestBody = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: REST_API_KEY,
      refresh_token: refreshToken,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      requestBody,
      config
    );
    console.log("refreshToken response: ", response);
    return response.data;
  } catch (error) {
    console.error(`Error in refreshToken: ${error}`);
    throw error;
  }
};
