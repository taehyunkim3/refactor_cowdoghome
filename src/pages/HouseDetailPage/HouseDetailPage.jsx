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

                <OnPosition top="29%" left="20%">
                  <CircleButton icon="plus" type="small" />
                </OnPosition>
                <OnPosition top="29%" left="20%" margin="15px">
                  <ItemDetailBubble />
                </OnPosition>
              </MainImage>
              <RelatedItems>
                <ul>
                  <li>
                    <ItemImage type="HouseItem" />
                  </li>
                </ul>
              </RelatedItems>
            </MainImageContainer>
            <CircleButton icon="plus" type="small" />
            <div>main</div>
          </MainLayoutInner>
        </MainLayout>
        <Footer />
        {/* </HouseDetailPageLayout> */}
      </CommonLayout>
    </>
  );
};
