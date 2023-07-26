// socialApi.js
import axios from "axios";

// export const kakaoLoginApi = async (code, REST_API_KEY, REDIRECT_URI) => {
//   console.log("kakaoLoginApi function called");

//   const requestBody = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: REST_API_KEY,
//     redirect_uri: REDIRECT_URI,
//     response_type: code,
//   });

//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };

//   const response = await axios.post(
//     "https://kauth.kakao.com/oauth/token",
//     requestBody,
//     config
//   );
//   alert(response); // 서버로부터 받은 응답의 본문을 출력합니다.
//   return response.data;
// };

// export const kakaoLoginApi = async (code, REST_API_KEY, REDIRECT_URI) => {
//   console.log("kakaoLoginApi function called");

//   const requestBody = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: REST_API_KEY,
//     redirect_uri: REDIRECT_URI,
//     response_type: code,
//   });

//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };

//   const response = await axios.post(
//     "https://kauth.kakao.com/oauth/token",
//     requestBody,
//     config
//   );
//   if (response.data.access_token) {
//     localStorage.setItem("access_token", response.data.access_token);
//   }

//   if (response.data.refresh_token) {
//     localStorage.setItem("refresh_token", response.data.refresh_token);
//   }

//   console.log("Server response: ", response);
//   return response.data;
// };

//=========================
// export const kakaoLoginApi = async (code, REST_API_KEY, REDIRECT_URI) => {
//   console.log("kakaoLoginApi function called");

//   const requestBody = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: REST_API_KEY,
//     redirect_uri: REDIRECT_URI,
//     code: code,
//   });


//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };

//   try {
//     const response = await axios.post(
//       "https://kauth.kakao.com/oauth/token",
//       requestBody,
//       config
//     );
//     console.log("Server response: ", response.data);

//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token);
//       console.log(`Stored token: ${localStorage.getItem("token")}`);
//     }

//     return response.data;
//   } catch (error) {
//     console.error(`Error in kakaoLoginApi: ${error}`);
//   }
// };
//========================
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
    console.log("Server response: ", response.data);

    // if (response.data.access_token) {
    //   localStorage.setItem("token", response.data.access_token);
    //   console.log(`Stored token: ${localStorage.getItem("token")}`);
    // }

    // // 이 부분에서 2차 요청을 수행합니다.
    // const secondResponse = await axios.get(
    //   "https://cowdoghome.store/api/login/kakao/callback?code=" + code
    // );
    // console.log("Second server response: ", secondResponse.data);


    // // 2차 요청에서 토큰이 있으면 로컬 스토리지에 저장
    // if (secondResponse.data.token) {
    //   localStorage.setItem("token", secondResponse.data.token);
    //   console.log(`Stored token: ${localStorage.getItem("token")}`);
    // }

    return response.data;
  } catch (error) {
    console.error(`Error in kakaoLoginApi: ${error}`);
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
