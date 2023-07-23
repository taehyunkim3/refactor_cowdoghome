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

export const ItemCard = styled.div`
  margin: 0;
  padding: 0;
`;

export const Article = styled.article`
  padding-bottom: 40px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 36px;
  margin: 0 0 16px;
  padding: 0 0 0 48px;
`;

export const Address = styled.address`
  flex: 0 0 auto;
  margin-top: -5px;
  font-size: 15px;
  line-height: 19px;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const UserProfile = styled.a`
  flex: 0 1 auto;
  transition: opacity 0.1s;
  display: inline-block;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UserImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #ededed;
`;

export const UserName = styled.span`
  color: #424242;
  font-weight: 500;
`;

export const Introduction = styled.p`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImageAndBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DetailLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  touch-action: manipulation;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 77.6%;
  background-color: #ededed;
  overflow: hidden;

  @media screen (min-width: 768px) {
    padding-bottom: 100%;
    border-radius: 6px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s;
`;

export const BottomBtns = styled.aside`
  display: flex;
  margin-bottom: -12px;
`;

export const Btn = styled.button`
  flex: 1 0 0px;
  position: relative;
  display: block;
  margin: 0;
  padding: 13px 0 16px;
  background: none;
  border: none;
  text-align: center;
  transition: opacity 0.1s;
  z-index: 2;
`;

export const BtnCounter = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: #424242;
`;

export const ItemCardComponent = ({}) => {
  return (
    <ItemCardWrapper>
      <ItemCard>
        <Article>
          <ProfileWrapper>
            <Address>
              <FlexDiv>
                <UserProfile>
                  <UserImage src="" alt="profile" />
                  <UserName>UserName</UserName>
                </UserProfile>
                <Introduction>Introduction</Introduction>
              </FlexDiv>
            </Address>
          </ProfileWrapper>
          <ImageAndBtnsWrapper>
            <DetailLink href="" />
            <div>
              <ImageWrapper>
                <Image src="" alt="image" />
              </ImageWrapper>
            </div>
            <Btn>
              <CircleButton
                icon="Heart"
                size="24px"
                bgColor="transparent"
                isShadow={false}
              />
              <BtnCounter>6</BtnCounter>
            </Btn>
            <Btn>
              <CircleButton
                icon="Bookmark"
                size="24px"
                bgColor="transparent"
                isShadow={false}
              />
              <BtnCounter>6</BtnCounter>
            </Btn>
            <Btn>
              <CircleButton
                icon="Bubble"
                size="24px"
                bgColor="transparent"
                isShadow={false}
              />
              <BtnCounter>6</BtnCounter>
            </Btn>
          </ImageAndBtnsWrapper>
        </Article>
      </ItemCard>
    </ItemCardWrapper>
  );
};
