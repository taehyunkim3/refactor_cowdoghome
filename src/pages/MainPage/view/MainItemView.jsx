import styled from "styled-components";
import { ItemCardComponent } from "../components";

export const ItemCardWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
`;

export const MainItemView = ({
  nickname,
  introduction,
  profileImage,
  contentImage,
}) => {
  const array = Array(20).fill(0);

  return (
    <ItemCardWrapper>
      {array.map((e, i) => {
        return (
          <ItemCardComponent
            nickname={nickname}
            introduction={introduction}
            profileImage={profileImage}
            contentImage={contentImage}
            key={i}
          />
        );
      })}
    </ItemCardWrapper>
  );
};
