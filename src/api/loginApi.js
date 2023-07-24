import axios from "axios";

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/login", {
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
