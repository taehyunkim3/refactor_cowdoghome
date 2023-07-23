import { styled } from "styled-components";
import { CircleButton } from "../../../components";

export const ItemCardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  display: block;
  aspect-ratio: 1;
  border: 1px solid black;
`;

export const ItemCard = styled.div``;

export const Article = styled.article``;

export const ProfileWrapper = styled.div``;

export const Address = styled.address``;

export const FlexDiv = styled.div``;

export const UserProfile = styled.a``;

export const UserImage = styled.img``;

export const UserName = styled.span``;

export const Introduction = styled.p``;

export const ImageAndBtnsWrapper = styled.div``;

export const DetailLink = styled.a``;

export const ImageWrapper = styled.div``;

export const Image = styled.img``;

export const BottomBtns = styled.aside``;

export const Btn = styled.button``;

export const BtnCounter = styled.span``;

export const ItemCardComponent = ({
  nickname,
  introduction,
  profileImage,
  contentImage,
}) => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 8, paddingBottom: 12 }}>
        <div>
          <img src={profileImage} style={{ borderRadius: 999, width: 40 }} />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div>{nickname}</div>
          <div>{introduction}</div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <img
          src={contentImage}
          style={{ width: "100%", height: "100%", borderRadius: 8 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleButton
            icon="Heart"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p>3</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleButton
            icon="Bookmark"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p>3</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleButton
            icon="Bubble"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p>2</p>
        </div>
      </div>
    </div>
  );
};
