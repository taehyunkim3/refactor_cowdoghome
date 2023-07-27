import { useState } from "react";
import {
  Button,
  RoundButton,
  SelectedItemBox,
  Selector,
} from "../../../../components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  useSelectedOptions,
  useSelectedProducts,
  useTotalPrice,
  useHeart,
} from "../../container";
import { BrandIcon } from "../../components";
import {
  Wrapper,
  Container,
  BrandName,
  ItemSection,
  ItemName,
  HeartContainer,
  HeartCount,
  RatingSection,
  Stars,
  Text,
  ReviewCount,
  DiscountSection,
  DiscountRate,
  OriginalPrice,
  PriceSection,
  DiscountPrice,
  Currency,
  BenefitDeliveryContainer,
  FlexRow,
  BenefitTitle,
  FlexColumn,
  BenefitPoint,
  HighlightedText,
  BrandContainer,
  BrandWrapper,
  Brand,
  SelectorContainer,
  BorderTopContainer,
  PriceContainer,
  PriceText,
  TotalPrice,
  ButtonContainer,
} from "./style";

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
  reviewCount,
  heartCount,
}) => {
  const { selectedOption, setSelectedOption, isSelectFinished } =
    useSelectedOptions();
  const [additionalPrices, setAdditionalPrices] = useState([]);
  const { selectedProducts, setSelectedProducts } = useSelectedProducts(
    discountprice,
    selectedOption,
    setSelectedOption,
    additionalPrices
  );
  const { totalPrice } = useTotalPrice(selectedProducts);
  const { isHeartClicked, handleClickHeart } = useHeart();
  const [currentSelectedSelector, serCurrentSelectedSelector] = useState(0);

  const priceAddedSize = size.map((e, i) => {
    return e + ` (+ ${(5000 * i).toLocaleString()}원)`;
  });

  const storeAdditionalPrices = (price) => {
    setAdditionalPrices([...additionalPrices, price]);
  };

  return (
    <Wrapper>
      <Container>
        <BrandName>{brandName}</BrandName>
        <ItemSection>
          <ItemName>{itemName}</ItemName>
          <HeartContainer onClick={handleClickHeart}>
            {isHeartClicked ? (
              <AiFillHeart shadow={false} size={"32px"} color="red" />
            ) : (
              <AiOutlineHeart shadow={false} size={"32px"} color="gray" />
            )}
            <HeartCount>{heartCount}</HeartCount>
          </HeartContainer>
        </ItemSection>
      </Container>

      <Container>
        <RatingSection>
          <Stars>
            {Array(+rating)
              .fill(0)
              .map((e, index) => {
                return <span key={index}>★</span>;
              })}
          </Stars>
          <ReviewCount>{reviewCount}개 리뷰</ReviewCount>
        </RatingSection>
        {+discount === 0 ? (
          <></>
        ) : (
          <DiscountSection>
            <DiscountRate>{discount}%</DiscountRate>
            <OriginalPrice>{Number(price).toLocaleString()}원</OriginalPrice>
          </DiscountSection>
        )}
        <PriceSection>
          <DiscountPrice>
            {Number(discountprice).toLocaleString()}
          </DiscountPrice>
          <Currency>원</Currency>
        </PriceSection>
      </Container>

      <BenefitDeliveryContainer>
        <FlexRow style={{ paddingTop: "18px" }}>
          <BenefitTitle>혜택</BenefitTitle>
          <FlexColumn>
            <FlexRow style={{ gap: 3 }}>
              <BenefitPoint>{benefit}P</BenefitPoint>
              <Text>적립</Text>
              <Text>(WELCOME 0.1% 적립)</Text>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <BenefitTitle>배송</BenefitTitle>
          <FlexColumn>
            <BenefitPoint>무료배송</BenefitPoint>
            <Text>
              지금 주문 시 <HighlightedText>내일 출발</HighlightedText>
            </Text>
            <Text>일반택배</Text>
          </FlexColumn>
        </FlexRow>
      </BenefitDeliveryContainer>

      <BrandContainer>
        <BrandWrapper>
          <BrandIcon />
          <Brand>이케아</Brand>
        </BrandWrapper>
        <div
          onClick={(e) => {
            e.preventDefault();
            alert("구현 예정");
          }}
          style={{ width: "66px" }}
        >
          <RoundButton
            text="브랜드홈 〉"
            color="lightGray"
            size="small"
            href=""
          />
        </div>
      </BrandContainer>
      <SelectorContainer>
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
          options={selectedOption[0] ? priceAddedSize : []}
          focus={selectedOption[0]}
          onClick={() => {
            selectedOption[0] && serCurrentSelectedSelector(1);
          }}
          storeValue={(optionName) => {
            setSelectedOption([selectedOption[0], optionName]);
          }}
          isSelectFinished={isSelectFinished}
          storeAdditionalPrices={storeAdditionalPrices}
        />
      </SelectorContainer>

      {selectedProducts.map((e, i) => {
        const { itemName: itemText, count, price } = e;

        const additionalPriceCalculatedPrice = String(
          +discountprice + 5000 * additionalPrices[i]
        );

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
            price={additionalPriceCalculatedPrice}
            onClickPlus={clickPlus}
            onClickMinus={clickMinus}
            onClickDelete={deleteProduct}
            itemtext={itemText}
          />
        );
      })}

      <BorderTopContainer />
      <PriceContainer>
        <PriceText>주문금액</PriceText>
        <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
      </PriceContainer>
      <ButtonContainer>
        <Button label="장바구니" theme="empty" size="large" b />
        {selectedProducts.length > 0 ? (
          <Button label="바로구매" theme="filled" size="large" b />
        ) : (
          <Button label="바로구매" theme="gray" size="large" b />
        )}
      </ButtonContainer>
    </Wrapper>
  );
};
