import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 400px;
  transition: transform 0.2s ease-in-out;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex: 1;
  padding-top: 36px;
  overflow: hidden;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  color: white;
  padding-left: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerText = styled.p`
  font-size: 2.8vw;
  font-weight: 700;
  font-family: "Jal_Haru";
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
`;

export const ProfileName = styled.p`
  color: white;
  font-family: "Jal_Haru";
  margin-left: 8px;
`;
