import { styled } from "styled-components";
import { CircleButton } from "../../../components";
import { Link } from "react-router-dom";

export const ItemCardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  display: block;
  aspect-ratio: 1;
  border: 1px solid black;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  border-radius: 999px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const ItemCardComponent = ({
  nickname,
  introduction,
  profileImage,
  contentImage,
  id,
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
          <ProfileImage src={profileImage} />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{ fontSize: 15, fontWeight: 500, fontFamily: "Jal_Haru" }}
          >
            {nickname}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#757575",
              fontFamily: "Jal_Haru",
            }}
          >
            {introduction}
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "hidden", borderRadius: 8 }}>
        <Link to={`/house/${id}`}>
          <MainImage src={contentImage} />
        </Link>
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
