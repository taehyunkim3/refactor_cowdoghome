import { useQuery } from "@tanstack/react-query";
import { MainPageDataFetch } from "../../../../api";

export const useMainPageData = () => {
  const { getMainPageData } = MainPageDataFetch();

  const { data, isLoading } = useQuery({
    queryKey: ["mainData"],
    queryFn: getMainPageData,
  });

  if (isLoading) {
    return {
      isLoading: true,
      data: [],
    };
  }

  const firstPageData = data.slice(0, 12);
  const secondPageData = data.slice(12, 25);
  const lastPageData = data.slice(25);

  return {
    data: [[...firstPageData], [...secondPageData], [...lastPageData]],
    isLoading,
  };
};
