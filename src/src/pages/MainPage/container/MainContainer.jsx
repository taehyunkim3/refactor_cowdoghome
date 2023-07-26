import { useDispatch, useSelector } from "react-redux";
import { MainBannerView, MainItemView } from "../view";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { incrementPageIndex } from "../../../redux";
import { useMainPageData } from "./hooks";
import { DummyData, imageUrl } from "./dummy";

//TODO : Container
//TODO : data hook

export const MainContainer = ({}) => {
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
        const pageData = e[i];
        const createdAt = pageData["User.createdAt"];
        const nickname = pageData["User.nickname"];
        const profileImage = pageData["User.profileImgUrl"];
        const id = pageData.detailsId;
        const contentImage = pageData.imgUrl;
        return (
          <MainItemView
            key={i}
            id={id}
            nickname={nickname}
            profileImage={profileImage}
            contentImage={contentImage}
          />
        );
      })}
      <div ref={ref} style={{ padding: 20, boxSizing: "border-box" }}>
        sdf
      </div>
    </div>
  );
};
