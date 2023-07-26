import { useState } from "react";

export const ItemImageView = ({ imageUrl }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 6,
        gap: 15,
        paddingLeft: 10,
        paddingRight: 10,
        margin: "0 30px 0 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          flex: 1,
          gap: 15,
          flexDirection: "column",
        }}
      >
        {imageUrl.map((e, i) => {
          return (
            <li key={i}>
              <button
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#ededed",
                  overflow: "hidden",
                  borderRadius: "4px",
                  border:
                    selectedImageIndex === i
                      ? "4px solid #35c5f0"
                      : "0px solid #35c5f0",
                }}
              >
                <div
                  style={{
                    aspectRatio: 1,
                    backgroundColor: "black",
                    position: "absolute",
                    width: "100%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "transform .2s",
                  }}
                  onClick={() => {
                    handleClickImage(i);
                  }}
                >
                  <img src={e} style={{ width: "100%", height: "100%" }} />
                </div>
              </button>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          flex: 5,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            aspectRatio: 1,
            maxWidth: 600,
          }}
        >
          <img src={imageUrl[selectedImageIndex]} />
        </div>
      </div>
    </div>
  );
};
