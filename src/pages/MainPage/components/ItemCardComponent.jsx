import { useMemo } from "react";
import { CircleButton, CircleImage } from "../../../components";
import {
  ButtonSection,
  ButtonWrapper,
  FlexBox,
  ImageLink,
  MainImage,
  NicknameText,
  ProfileContent,
  ProfileImage,
  SmallText,
  StyledGrid,
} from "./style";

export const ItemCardComponent = ({
  nickname,
  profileImage,
  contentImage,
  id,
  createdAt,
}) => {
  const heartCount = useMemo(() => {
    return Math.floor(Math.random() * 99).toLocaleString();
  }, []);

  const bookmarkCount = useMemo(() => {
    return Math.floor(Math.random() * 20).toLocaleString();
  }, []);

  const commentCount = useMemo(() => {
    return Math.floor(Math.random() * 40).toLocaleString();
  }, []);

  return (
    <StyledGrid>
      <FlexBox>
        {profileImage ? (
          <ProfileImage src={profileImage} />
        ) : (
          <CircleImage type="profile" size="40px" />
        )}
        <ProfileContent>
          <NicknameText>{nickname}</NicknameText>
          <SmallText>Posted on {createdAt.slice(0, 10)}</SmallText>
        </ProfileContent>
      </FlexBox>
      <ImageLink to={`/house/${id}`}>
        <MainImage src={contentImage} />
      </ImageLink>
      <ButtonSection>
        <ButtonWrapper>
          <CircleButton
            icon="Heart"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{heartCount}</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <CircleButton
            icon="Bookmark"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{bookmarkCount}</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <CircleButton
            icon="Bubble"
            bgColor="transparent"
            isShadow={false}
            color="#424242"
          />
          <p style={{ marginLeft: "-4px" }}>{commentCount}</p>
        </ButtonWrapper>
      </ButtonSection>
    </StyledGrid>
  );
};
