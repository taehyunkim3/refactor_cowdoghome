import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 6;
  gap: 15px;
  padding: 0 10px;
  margin: 0 30px 0 0;
`;

export const ImageList = styled.ul`
  display: flex;
  flex: 1;
  gap: 15px;
  flex-direction: column;
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 4px;
  border: ${({ $isSelected }) =>
    $isSelected ? "4px solid #35c5f0" : "4px solid white"};
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  color: white;
  aspect-ratio: 1;
  max-width: 600px;
`;
