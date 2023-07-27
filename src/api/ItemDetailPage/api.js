import axios from "axios";

export const ItemDetailPageDataFetch = () => {
  const API = axios.create({
    baseURL: "https://cowdoghome.store/api/itemPage",
    headers: {},
  });

  const url = document.location.href;

  const currentItemId = url.split("/").at(-1);

  const getItemDetailPageData = async () => {
    const response = await API.get(`${currentItemId}`, {
      params: {},
    });

    return response.data.oneItem;
  };

  return { getItemDetailPageData };
};
