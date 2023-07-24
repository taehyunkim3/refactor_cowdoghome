import styled from "styled-components";

export const TopBannerContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00bbff;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

export const CouponImage = styled.img`
  height: 42px;
  padding-right: 8px;
`;

export const BannerContent = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  display: flex;
  right: 8px;
  padding: 12px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LightSpan = styled.span`
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.3px;
`;

export const BoldSpan = styled.span`
  padding-left: 6px;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.3px;
`;
