import { useNavigate, useParams } from "react-router-dom";
import { Footer, Header, ItemImage, TopBanner } from "../../components";
import { OnPositionBubble, UserProfileContainer } from "./components";
import { HrWithCounter } from "./components/HrWithCounter/HrWithCounter";
import {
  CommonLayout,
  MainImage,
  MainImageContainer,
  MainLayout,
  MainLayoutInner,
  RelatedItems,
  ContentText,
} from "./style";
import ReactMarkdown from "react-markdown";
import { useQuery } from "@tanstack/react-query";
import { getHouseDetail } from "../../api/houseApi";
import { useEffect, useState } from "react";

export const HouseDetailPage = ({}) => {
  const navigate = useNavigate();
  const { houseId } = useParams();
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [imgHeight, setImgHeight] = useState(0);
  //⬇️ 쿼리 훅
  const { data, isLoading, isError, error } = useQuery(
    ["detail", houseId],
    () => getHouseDetail(houseId)
  );
  // ⬇️ 이미지 높이 비율 자동 계산
  useEffect(() => {
    const img = new Image();
    img.src = data && data.details.imgUrl;
    img.onload = () => {
      const heightRatio = (img.height / img.width) * 100;
      console.log("Height ratio:", heightRatio);
      setImgHeight(heightRatio);
    };
  }, [data]);

  //⬇️ 에러 핸들링
  if (houseId === "undefined") {
    return <div>undefined는 존재하지 않는 제품입니다👀</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  //⬇️ 날짜 변경 함수 ( 애러 핸들링 후에 넣어야 함 )
  let date = new Date(data.userData.createdAt);
  let formattedDate = `${date.getFullYear().toString().substr(-2)}. ${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}. ${("0" + date.getDate()).slice(-2)}`;

  return (
    <>
      {" "}
      <Footer>
        <CommonLayout>
          <TopBanner />
          <Header />
          {/* <HouseDetailPageLayout> */}
          <MainLayout>
            <MainLayoutInner>
              <MainImageContainer>
                <MainImage imgHeight={imgHeight}>
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
                      isHovered={hoveredItemId === item.itemId}
                      onClickFunction={() => {
                        navigate(`/item/${item.itemId}`);
                      }}
                      setHoveredItemId={setHoveredItemId}
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
                          onMouseOver={() => setHoveredItemId(item.itemId)}
                          onMouseOut={() => setHoveredItemId(null)}
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

          {/* </HouseDetailPageLayout> */}
        </CommonLayout>
      </Footer>
    </>
  );
};
