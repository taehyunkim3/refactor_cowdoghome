// @ts-nocheck
import Coupon from "./CouponImage/coupon.png";
import { BiSolidDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { closeTopBanner } from "../../../redux";
import {
  TopBannerContainer,
  ContentContainer,
  CouponImage,
  BannerContent,
  LightSpan,
  BoldSpan,
  CloseButtonContainer,
  CloseButton,
} from "./style";
import { CloseButtonIcon } from "./CloseButtonIcon";

export const TopBanner = ({}) => {
  const dispatch = useDispatch();
  const isTopBannerOpen = useSelector((state) => state.topBanner);

  const handleButtonClick = () => {
    dispatch(closeTopBanner());
  };

  const handleBannerClick = () => {
    alert("쿠폰이 발급되려다 말았습니다! 😱");
  };

  return isTopBannerOpen ? (
    <TopBannerContainer>
      <ContentContainer>
        <CouponImage src={Coupon} />
        <BannerContent onClick={handleBannerClick}>
          <LightSpan>첫 구매라면 누구나 최대</LightSpan>
          <BoldSpan>2만원 할인받기</BoldSpan>
          <BiSolidDownload style={{ fontSize: "24px", marginLeft: "1.5px" }} />
        </BannerContent>
      </ContentContainer>
      <CloseButtonContainer>
        <CloseButton onClick={handleButtonClick}>
          <div style={{ color: "#ffffff", fontSize: "22px" }}>
            <CloseButtonIcon />
          </div>
        </CloseButton>
      </CloseButtonContainer>
    </TopBannerContainer>
  ) : (
    <></>
  );
};
