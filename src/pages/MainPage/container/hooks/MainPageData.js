import { useQuery } from "@tanstack/react-query";
import { MainPageDataFetch } from "../../../../api";
import { useState } from "react";

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

  const groupByPage = (data, itemsPerPage) => {
    return data.reduce((acc, curr, i) => {
      if (i % itemsPerPage === 0) acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);
  };

  const itemsPerPage = 12;
  const groupedData = groupByPage(data, itemsPerPage);

  return {
    data: groupedData,
    isLoading,
  };
};
