import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/register",
      userData
    );
    return response.data;
  } catch (error) {
    console.log("Error",error)
    throw error
  }
};