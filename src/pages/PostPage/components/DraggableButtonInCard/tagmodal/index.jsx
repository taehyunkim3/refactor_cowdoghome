import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ListItemBubble } from "../../ListItemBubble";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../../../../api/houseApi";

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
  const { data, isLoading, isError, error } = useQuery(["item"], () =>
    getItems()
  );
  console.log(data);

  const handleSelect = (item) => {
    setSelectedItem({
      itemId: item.itemId,
      brandName: item.brandName,
      itemName: item.itemName,
      ItemImgLists: item["ItemImgLists.itemImg"]
        ? JSON.parse(item["ItemImgLists.itemImg"])
        : null,
    });
    console.log("🐹" + item.brandName);
    closeModal();
  };

  return (
    <StModalCotainer>
      {!selectedItem ? (
        <>
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            data &&
            data.allItems &&
            data.allItems.map((item, index) => (
              <div key={index}>
                <ListItemBubble
                  onClickFunction={() => handleSelect(item)}
                  imageUrl={JSON.parse(item["ItemImgLists.itemImg"])}
                  brand={item.brandName}
                  name={item.itemName}
                />
              </div>
            ))
          )}
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
  z-index: 1000;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
  border: 1px solid #dddcddff;
`;
