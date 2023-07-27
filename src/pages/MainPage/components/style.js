import { Link } from "react-router-dom";
import styled from "styled-components";

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
  aspect-ratio: 1;
  border-radius: 8px;
  background-position: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileImage = styled.img`
  width: 50px;
  border-radius: 999px;
  transition: transform 0.2s ease-in-out;
  aspect-ratio: 1;
  margin-left: 4px;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  width: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const NicknameText = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const SmallText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: "#757575";
  margin-top: 2px;
`;

export const ImageLink = styled(Link)`
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;
