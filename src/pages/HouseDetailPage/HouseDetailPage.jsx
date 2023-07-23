import {
  Button,
  CircleButton,
  Footer,
  Header,
  ItemDetailBubble,
  ItemImage,
} from "../../components";
import {
  CommonLayout,
  HouseDetailPageLayout,
  MainImage,
  MainImageContainer,
  MainLayout,
  MainLayoutInner,
  RelatedItems,
  OnPosition,
  ContentText,
} from "./style";

export const HouseDetailPage = ({}) => {
  return (
    <>
      {" "}
      <CommonLayout>
        <Header />
        {/* <HouseDetailPageLayout> */}
        <MainLayout>
          <MainLayoutInner>
            <MainImageContainer>
              <MainImage>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/168965165562799681.jpg?w=720"></img>

                <OnPosition top="90%" left="50%">
                  <CircleButton icon="plus" type="small" />
                  <ItemDetailBubble
                    y="-120%"
                    x="-100%"
                    name="TOP85%이상, LEFT50%이상 "
                  />
                </OnPosition>
                <OnPosition top="50%" left="60%">
                  <CircleButton icon="plus" type="small" />
                  <ItemDetailBubble x="-100%" name="LEFT50%이상" />
                </OnPosition>
                <OnPosition top="80%" left="40%">
                  <CircleButton icon="plus" type="small" />
                  <ItemDetailBubble y="-120%" x="5%" name="TOP85%이상" />
                </OnPosition>
                <OnPosition top="25%" left="50%">
                  <CircleButton icon="plus" type="small" />
                  <ItemDetailBubble x="5%" name="기본상태" />
                </OnPosition>
              </MainImage>
              <RelatedItems>
                <ul>
                  <li>
                    <ItemImage type="HouseItem" />
                  </li>
                </ul>
              </RelatedItems>
              <ContentText>sdffdfsdfsdf</ContentText>
            </MainImageContainer>
          </MainLayoutInner>
        </MainLayout>
        <Footer />
        {/* </HouseDetailPageLayout> */}
      </CommonLayout>
    </>
  );
};
