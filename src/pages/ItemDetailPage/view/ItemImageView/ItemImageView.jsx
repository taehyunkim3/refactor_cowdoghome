import { useState } from "react";
import {
  Container,
  ImageList,
  Button,
  ImageWrapper,
  PreviewContainer,
  PreviewWrapper,
  Image,
} from "./style";

export const ItemImageView = ({ imageUrl }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Container>
      <ImageList>
        {imageUrl.map((e, i) => {
          return (
            <li key={i}>
              <Button $isSelected={selectedImageIndex === i}>
                <ImageWrapper onClick={() => handleClickImage(i)}>
                  <Image src={e} />
                </ImageWrapper>
              </Button>
            </li>
          );
        })}
      </ImageList>
      <PreviewContainer>
        <PreviewWrapper>
          <Image src={imageUrl[selectedImageIndex]} />
        </PreviewWrapper>
      </PreviewContainer>
    </Container>
  );
};
