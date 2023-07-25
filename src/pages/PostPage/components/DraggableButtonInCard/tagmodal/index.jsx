import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ListItemBubble } from "../../ListItemBubble";

export const ImageTagModal = ({
  closeModal,
  selectedItem,
  setSelectedItem,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm && !selectedItem) {
      axios
        .get(`https://reqres.in/api/unknown`)
        .then((res) => {
          const filteredData = res.data.data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setResults(filteredData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const mockData = [
    {
      itemId: 1,
      brandName: "브랜드명",
      itemName: "상품명",
      // "rating": "별점",
      // "discount": "할인율",
      // "price": "원가격",
      // "discountprice": "할인가격",
      // "benefit" : discountprice * 0.001,
      ColorOptions: "",
      SizeOptions: "",
      ItemImgLists:
        "https://images.openai.com/blob/b4871bfc-8429-4a93-a5a1-66e1dd60e3f8/gpt-4-92586ac_1080p60-poster.jpg?trim=0,0,0,0&width=2000",
    },
    {
      itemId: 2,
      brandName: "브랜2드명",
      itemName: "상품명2",
      // "rating": "별점",
      // "discount": "할인율",
      // "price": "원가격",
      // "discountprice": "할인가격",
      // "benefit" : discountprice * 0.001,
      ColorOptions: "",
      SizeOptions: "",
      ItemImgLists:
        "https://images.openai.com/blob/b4871bfc-8429-4a93-a5a1-66e1dd60e3f8/gpt-4-92586ac_1080p60-poster.jpg?trim=0,0,0,0&width=2000",
    },
    {
      itemId: 3,
      brandName: "브랜드3명",
      itemName: "상품명3",
      // "rating": "별점",
      // "discount": "할인율",
      // "price": "원가격",
      // "discountprice": "할인가격",
      // "benefit" : discountprice * 0.001,
      ColorOptions: "",
      SizeOptions: "",
      ItemImgLists:
        "https://images.openai.com/blob/b4871bfc-8429-4a93-a5a1-66e1dd60e3f8/gpt-4-92586ac_1080p60-poster.jpg?trim=0,0,0,0&width=2000",
    },
  ];
  const handleSelect = (item) => {
    setSelectedItem(item);
    console.log("🐹" + item.brandName);
    closeModal();
  };

  return (
    <StModalCotainer>
      {!selectedItem ? (
        <>
          {" "}
          {mockData.map((item, index) => (
            <div key={index}>
              {item.name}
              {/* <button onClick={() => handleSelect(item)}>Select</button> */}
              <ListItemBubble
                onClickFunction={() => handleSelect(item)}
                imageUrl={item.ItemImgLists}
                brand={item.brandName}
                name={item.itemName}
              />
            </div>
          ))}
          <button onClick={() => closeModal()}>닫기</button>
          {/* <ListItemBubble onClickFunction={() => handleSelect(item.itemId)} /> */}
          {/* <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          {/* {results.map((item, index) => (
            // <div key={index}>
            //   {item.name}
            //   <button onClick={() => handleSelect(item)}>Select</button>
            // </div>
            <ListItemBubble />
          ))} */}
        </>
      ) : (
        <div>
          <h4>선택된 상품:</h4>
          <ListItemBubble
            onClickFunction={() => handleSelect(selectedItem)}
            imageUrl={selectedItem.ItemImgLists}
            brand={selectedItem.brandName}
            name={selectedItem.itemName}
            noButton={true}
          />
          <p>{selectedItem.name}</p>
        </div>
      )}
    </StModalCotainer>
  );
};

const StModalCotainer = styled.div`
  background-color: white;
  position: absolute;
  width: 375px;
  min-height: 100px;
  max-height: 450px;
  top: 40px;
  border-radius: 10px;
  padding: 20px;
  z-index: 999;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;
