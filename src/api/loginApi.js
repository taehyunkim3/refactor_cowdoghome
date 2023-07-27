import axios from "axios";

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post("https://cowdoghome.store/api/login", {
      email,
      password,
    });
    console.log("Login API Response: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Login API Error: ", error);
    throw error;
  }
};

export const postLogout = async (token) => { // 로그아웃
  try {
    const sentToken = { headers: { "cowdog": `Bearer ${token}` } };
    const { data } = await axios.post(`https://cowdoghome.store/api/logout`, sentToken);
    alert("로그아웃 되었습니다.");
    return data;
  } catch (e) {
    alert(e.response.data.errorMessage);
  }

}