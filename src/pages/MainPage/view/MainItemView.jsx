import { ItemCardComponent } from "../components";
import { ItemCardWrapper } from "./style";

export const MainItemView = ({ pageData }) => {
  return (
    <ItemCardWrapper>
      {pageData.map((e, i) => {
        const createdAt = e["User.createdAt"];
        const nickname = e["User.nickname"];
        const profileImage = e["User.profileImgUrl"];
        const id = e.detailsId;
        const contentImage = e.imgUrl;
        return (
          <ItemCardComponent
            id={id}
            nickname={nickname}
            profileImage={profileImage}
            contentImage={contentImage}
            createdAt={createdAt}
            key={i}
          />
        );
      })}
    </ItemCardWrapper>
  );
};
