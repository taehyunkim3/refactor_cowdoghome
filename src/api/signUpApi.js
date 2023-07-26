import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "https://cowdoghome.store/api/register",
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
