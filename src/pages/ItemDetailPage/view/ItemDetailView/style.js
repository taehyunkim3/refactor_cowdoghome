import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex: 4;
  gap: 10;
  flex-direction: column;
  padding-left: 10;
  padding-right: 10;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    max-width: 35%;
    min-width: 320;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BrandName = styled.span`
  display: flex;
  flex: 1;
  color: #656e75;
  font-size: 14px;
  font-weight: 700;
  transition: opacity 0.1s;
  cursor: pointer;
  padding-bottom: 8px;
`;

export const ItemSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: -12px;
`;

export const ItemName = styled.span`
  flex: 1;
  font-size: 22px;
  font-weight: 400;
  padding-right: 8px;
`;

export const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const HeartCount = styled.p`
  font-size: 11px;
  color: #424242;
  margin-top: 4px;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const Stars = styled.div`
  color: #35c5f0;
  font-weight: 900;
  font-size: 17px;
`;

export const ReviewCount = styled.span`
  color: #35c5f0;
  font-weight: 900;
  font-size: 15px;
`;

export const DiscountSection = styled.div`
  display: flex;
  font-size: 16px;
  color: #656e75;
`;

export const DiscountRate = styled.span`
  padding-right: 6px;
`;

export const OriginalPrice = styled.del``;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const DiscountPrice = styled.span`
  font-weight: 900;
  font-size: 34px;
  margin-right: 4px;
`;

export const Currency = styled.span`
  font-size: 24px;
`;

export const BenefitDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BenefitTitle = styled.div`
  color: #828c94;
  font-size: 14px;
`;

export const BenefitPoint = styled.b`
  color: #292929;
  font-size: 14px;
`;

export const Text = styled.span`
  color: #292929;
  font-size: 14px;
`;

export const HighlightedText = styled.b`
  color: #35c5f0;
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const BrandWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Brand = styled.span`
  color: #525b61;
  font-weight: bold;
  font-size: 15px;
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
  margin-bottom: 12px;
`;

export const Separator = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #ededed;
`;

export const BorderTopContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  &:after {
    content: "";
    display: block;
    border-top: 1px solid #ededed;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
`;

export const PriceText = styled.span`
  color: #2f3438;
  font-weight: 400;
  font-size: 14px;
`;

export const TotalPrice = styled.span`
  color: #2f3438;
  font-weight: 700;
  font-size: 28px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 24px;
`;
