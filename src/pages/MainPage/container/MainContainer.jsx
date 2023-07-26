import { useDispatch, useSelector } from "react-redux";
import { MainBannerView, MainItemView } from "../view";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { incrementPageIndex } from "../../../redux";
import { useMainPageData } from "./hooks";
import { imageUrl } from "./dummy";

export const MainContainer = () => {
  const dispatch = useDispatch();
  const pageIndex = useSelector((state) => state.pageIndex);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isLoading } = useMainPageData();

  useEffect(() => {
    if (inView) {
      dispatch(incrementPageIndex());
    }
  }, [inView]);

  if (isLoading) {
    return <div>isLoading~</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MainBannerView imageUrl={imageUrl} />
      {data.slice(0, pageIndex).map((e, i) => {
        const pageData = e;
        return <MainItemView key={i} pageData={pageData} />;
      })}
      <div ref={ref} style={{ padding: 20, boxSizing: "border-box" }}></div>
    </div>
  );
};
