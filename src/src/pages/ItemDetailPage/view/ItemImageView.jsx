export const ItemImageView = ({ imageUrl }) => {
  const array = Array(3).fill(0);

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
                  border: "none",
                  backgroundColor: "#ededed",
                  overflow: "hidden",
                  borderRadius: "4px",
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
          <div style={{ backgroundColor: "blue", flex: 1 }}>
            image 들어갈 곳
          </div>
        </div>
      </div>
    </div>
  );
};
