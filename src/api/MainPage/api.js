import axios from "axios";

export const MainPageDataFetch = () => {
  const API = axios.create({
    baseURL: "https://cowdoghome.store/api/main",
    headers: {},
  });

  const getMainPageData = async () => {
    const response = await API.get("", {
      params: {},
    });

    console.log(response);

    const mainPageData = response.data.main;

    return mainPageData;
  };

  return { getMainPageData };
};
