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
