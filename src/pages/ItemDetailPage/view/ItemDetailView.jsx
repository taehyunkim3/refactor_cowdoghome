import { useEffect, useState } from "react";
import {
  Button,
  CircleButton,
  RoundButton,
  SelectedItemBox,
  Selector,
} from "../../../components";

export const ItemDetailView = ({
  brandName,
  itemName,
  rating,
  discount,
  price,
  discountprice,
  benefit,
  color,
  size,
}) => {
  const [currentSelectedSelector, serCurrentSelectedSelector] = useState(0);

  const [selectedOption, setSelectedOption] = useState(["", ""]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const isSelectFinished = selectedOption.every((e) => e);

  useEffect(() => {
    selectedOption.every((e) => e) &&
      setSelectedProducts([
        ...selectedProducts,
        {
          itemName: selectedOption.join("/"),
          count: 1,
          price: 65900,
        },
      ]);

    selectedOption.every((e) => e) && setSelectedOption(["", ""]);
  }, [selectedOption]);

  useEffect(() => {
    const totalPrice = selectedProducts.reduce((prev, cur) => {
      return prev + cur.price * cur.count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [selectedProducts]);

  return (
    <div
      style={{
        display: "flex",
        flex: 4,
        maxWidth: "41%",
        minWidth: 320,
        gap: 10,
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <span
            style={{
              color: "#656e75",
              fontSize: "14px",
              fontWeight: 700,
              transition: "opacity .1s",
              cursor: "pointer",
            }}
          >
            {brandName}
          </span>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <span style={{ flex: 1, fontSize: "22px", fontWeight: 400 }}>
            {itemName}
          </span>
          <div>버튼 넣는 곳</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ color: "#35C5F0", fontWeight: 400 }}>
            {new Array(rating).fill(0).map((e) => {
              return <span key={e}>★</span>;
            })}
          </div>
          <span style={{ color: "#35C5F0", fontWeight: 700, fontSize: "13px" }}>
            2개 리뷰
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            color: "#656e75",
          }}
        >
          <span style={{ paddingRight: "6px" }}>{discount}</span>
          <del>{price}</del>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <span
            style={{ fontWeight: 700, fontSize: "32px", marginRight: "4px" }}
          >
            {discountprice}
          </span>
          <span>원</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingBottom: "20px",
          borderBottom: "1px solid #ededed",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ color: "#828c94", fontSize: "14px" }}>혜택</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 3 }}>
              <b style={{ color: "#292929", fontSize: "14px" }}>{benefit}</b>
              <span style={{ color: "#292929", fontSize: "14px" }}>적립</span>
              <span style={{ color: "#292929", fontSize: "14px" }}>
                (WELCOME 0.1% 적립)
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ color: "#828c94", fontSize: "14px" }}>배송</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <b style={{ color: "#292929", fontSize: "14px" }}>무료배송</b>
            <div style={{ color: "#292929", fontSize: "14px" }}>
              지금 주문 시 <b style={{ color: "#35c5f0" }}>내일 출발</b>
            </div>
            <span style={{ color: "#292929", fontSize: "14px" }}>일반택배</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <div>svg</div>
          <span
            style={{ color: "#525b61", fontWeight: "bold", fontSize: "15px" }}
          >
            이케아
          </span>
        </div>

        <div style={{ width: "66px" }}>
          <RoundButton text="브랜드홈 〉" color="lightGray" size="small" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Selector
          title="컬러"
          options={color}
          focus={!selectedOption[0]}
          onClick={() => {
            serCurrentSelectedSelector(0);
          }}
          storeValue={(optionName) => {
            setSelectedOption([optionName, selectedOption[1]]);
          }}
          isSelectFinished={isSelectFinished}
        />
        <Selector
          title="사이즈"
          options={selectedOption[0] ? size : []}
          focus={selectedOption[0]}
          onClick={() => {
            selectedOption[0] && serCurrentSelectedSelector(1);
          }}
          storeValue={(optionName) => {
            setSelectedOption([selectedOption[0], optionName]);
          }}
          isSelectFinished={isSelectFinished}
        />
      </div>

      {selectedProducts.map((e, i) => {
        const { itemName: itemText, count, price } = e;

        const clickPlus = () => {
          const newProductData = {
            ...selectedProducts[i],
            count: selectedProducts[i].count + 1,
          };
          const currentData = [...selectedProducts];
          currentData[i] = newProductData;
          setSelectedProducts(currentData);
        };

        const clickMinus = () => {
          const newProductData = {
            ...selectedProducts[i],
            count: selectedProducts[i].count - 1,
          };
          const currentData = [...selectedProducts];
          currentData[i] = newProductData;
          setSelectedProducts(currentData);
        };

        const deleteProduct = () => {
          const newProductData = selectedProducts.filter((product, index) => {
            return index !== i;
          });

          setSelectedProducts(newProductData);
        };

        return (
          <SelectedItemBox
            item
            key={i}
            itemText={itemText}
            counter={count}
            price={price}
            onClickPlus={clickPlus}
            onClickMinus={clickMinus}
            onClickDelete={deleteProduct}
            itemtext={itemText}
          />
        );
      })}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#2f3438", fontWeight: 400, fontSize: "14px" }}>
          주문금액
        </span>
        <span style={{ color: "#2f3438", fontWeight: 700, fontSize: "28px" }}>
          {totalPrice.toLocaleString()}원
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Button label="장바구니" theme="empty" size="large" b />
        <Button label="바로구매" theme="filled" size="large" b />
      </div>
    </div>
  );
};
