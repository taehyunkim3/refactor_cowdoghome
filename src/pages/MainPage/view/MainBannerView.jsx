import { styled } from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 400px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MainBannerView = ({ imageUrl }) => {
  return (
    <div style={{ flex: 1, paddingTop: 36, overflow: "hidden" }}>
      <Image src={imageUrl} alt="mainImage" />
    </div>
  );
};
