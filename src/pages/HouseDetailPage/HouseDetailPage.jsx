import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CircleButton,
  Footer,
  Header,
  ItemDetailBubble,
  ItemImage,
} from "../../components";
import { OnPositionBubble, UserProfileContainer } from "./components";
import { HrWithCounter } from "./components/HrWithCounter/HrWithCounter"; //이거는 무슨의미인지 모르겠음
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
import ReactMarkdown from "react-markdown";
import { useQuery } from "@tanstack/react-query";
import { getDeskDetail } from "../../api/houseApi";

export const HouseDetailPage = ({}) => {
  const navigate = useNavigate();
  const { houseId } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["detail", houseId],
    () => getDeskDetail(houseId)
  );
  console.log(data);

  if (houseId === "undefined") {
    return <div>undefined는 존재하지 않는 제품입니다👀</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data.itemData);
  let date = new Date(data.userData.createdAt);
  let formattedDate = `${date.getFullYear().toString().substr(-2)}. ${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}. ${("0" + date.getDate()).slice(-2)}`;

  console.log(formattedDate);
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
                <img src={data.details.imgUrl}></img>

                {data.itemData.map((item) => (
                  <OnPositionBubble
                    top={`${item["WritePacks.coordinateY"]}%`}
                    left={`${item["WritePacks.coordinateX"]}%`}
                    name={item.itemName}
                    brand={item.brandName}
                    price={item.price}
                    imageUrl={JSON.parse(item["ItemImgLists.itemImg"])}
                    itemId={item.itemId}
                    onClickFunction={() => {
                      navigate(`/item/${item.itemId}`);
                    }}
                  />
                ))}
              </MainImage>
              <RelatedItems>
                <ul>
                  <li>
                    {data.itemData.map((item) => (
                      <ItemImage
                        type="HouseItem"
                        imgUrl={JSON.parse(item["ItemImgLists.itemImg"])}
                        onClickFunction={() => {
                          navigate(`/item/${item.itemId}`);
                        }}
                      />
                    ))}
                  </li>
                </ul>
              </RelatedItems>
              <ContentText>
                <ReactMarkdown>{data.details.content}</ReactMarkdown>
              </ContentText>
            </MainImageContainer>

            <HrWithCounter />
            <UserProfileContainer
              name={data.userData.nickname}
              date={formattedDate}
            />
          </MainLayoutInner>
        </MainLayout>
        <Footer />
        {/* </HouseDetailPageLayout> */}
      </CommonLayout>
    </>
  );
};
