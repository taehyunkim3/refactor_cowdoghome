import { useDispatch, useSelector } from "react-redux";
import { MainBannerView, MainItemView } from "../view";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { incrementPageIndex } from "../../../redux";

//TODO : Container
//TODO : data hook
const nickname = "haru";
const introduction = "this is introduction";
const profileImage =
  "https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/164828583192711890.jpeg?gif=1&w=72&h=72&c=c&webp=1s";
const contentImage =
  "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/168992315568603407.jpeg?w=1440";
const imageUrl =
  "https://img.freepik.com/premium-photo/wallpaper-with-dark-dramatic-gradient-colors-ai-generation_201606-3458.jpg";

const backendData = {
  main: [
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
  ],
};

const test = [
  [
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
  ],
  [
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
  ],
  [
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
  ],
  [
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
    {
      profileImage: profileImage,
      nickname: "haru",
      introduction: introduction,
      contentImage: contentImage,
    },
  ],
];

export const MainContainer = ({}) => {
  const dispatch = useDispatch();
  const pageIndex = useSelector((state) => state.pageIndex);
  console.log(pageIndex);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      dispatch(incrementPageIndex());
    }
  }, [inView]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MainBannerView imageUrl={imageUrl} />
      {test.slice(0, pageIndex).map((e, i) => {
        return (
          <MainItemView
            key={i}
            nickname={nickname}
            introduction={introduction}
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
