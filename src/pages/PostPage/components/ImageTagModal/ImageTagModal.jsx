import { StModalCotainer } from "./style";
import { ListItemBubble } from "../ListItemBubble";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../../../api/houseApi";

export const ImageTagModal = ({
  closeModal,
  selectedItem,
  setSelectedItem,
}) => {
  const { data, isLoading, isError, error } = useQuery(["item"], () =>
    getItems()
  );
  //
  const handleSelect = (item) => {
    console.log(
      "TAGMODALHANDLESELECT🐹" + item.itemId + item.brandName + item.itemName
    );
    console.log("TAGMODALHANDLESELECTselecteditemBefore🐹🐹" + selectedItem);
    setSelectedItem({
      itemId: item.itemId,
      brandName: item.brandName,
      itemName: item.itemName,
      ItemImgLists: item["ItemImgLists.itemImg"]
        ? JSON.parse(item["ItemImgLists.itemImg"])
        : null,
    });
    console.log("TAGMODALHANDLESELECTselecteditemAfter🐹🐹🐹" + selectedItem);
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
            imageUrl={selectedItem["ItemImgLists.itemImg"]}
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
