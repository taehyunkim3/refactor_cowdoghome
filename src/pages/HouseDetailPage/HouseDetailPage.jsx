import { useNavigate, useParams } from "react-router-dom";
import { Footer, Header, ItemImage, TopBanner } from "../../components";
import { OnPositionBubble, UserProfileContainer } from "./components";
import { HrWithCounter } from "./components/HrWithCounter/HrWithCounter"; //이거는 무슨의미인지 모르겠음
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
import { useState } from "react";

export const HouseDetailPage = ({}) => {
  const navigate = useNavigate();
  const { houseId } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["detail", houseId],
    () => getHouseDetail(houseId)
  );
  console.log(data);
  const [hoveredItemId, setHoveredItemId] = useState(null);

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
        <TopBanner />
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
                    isHovered={hoveredItemId === item.itemId} // pass isHovered prop
                    onClickFunction={() => {
                      navigate(`/item/${item.itemId}`);
                    }}
                    setHoveredItemId={setHoveredItemId} // pass setHoveredItemId prop
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
                        onMouseOver={() => setHoveredItemId(item.itemId)} // use setHoveredItemId here
                        onMouseOut={() => setHoveredItemId(null)} // and here
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

// return (
//   <>
//     {" "}
//     <CommonLayout>
//       <TopBanner />
//       <Header />
//       {/* <HouseDetailPageLayout> */}
//       <MainLayout>
//         <MainLayoutInner>
//           <MainImageContainer>
//             <MainImage>
//               <img src={data.details.imgUrl}></img>

//               {data.itemData.map((item) => (
//                 <OnPositionBubble
//                   top={`${item["WritePacks.coordinateY"]}%`}
//                   left={`${item["WritePacks.coordinateX"]}%`}
//                   name={item.itemName}
//                   brand={item.brandName}
//                   price={item.price}
//                   imageUrl={JSON.parse(item["ItemImgLists.itemImg"])}
//                   itemId={item.itemId}
//                   onClickFunction={() => {
//                     navigate(`/item/${item.itemId}`);
//                   }}
//                 />
//               ))}
//             </MainImage>
//             <RelatedItems>
//               <ul>
//                 <li>
//                   {data.itemData.map((item) => (
//                     <ItemImage
//                       type="HouseItem"
//                       imgUrl={JSON.parse(item["ItemImgLists.itemImg"])}
//                       onClickFunction={() => {
//                         navigate(`/item/${item.itemId}`);
//                       }}
//                     />
//                   ))}
//                 </li>
//               </ul>
//             </RelatedItems>
