import { styled } from "styled-components";
import Coupon from "./CouponImage/coupon.png";
import { BiSolidDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { closeTopBanner } from "../../../redux";

export const TopBanner = ({}) => {
  const dispatch = useDispatch();
  const isTopBannerOpen = useSelector((state) => state.topBanner);

  const handleClick = () => {
    dispatch(closeTopBanner());
  };

  return isTopBannerOpen ? (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00bbff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 40px",
        }}
      >
        <img src={Coupon} style={{ height: "42px", paddingRight: 8 }} />
        <div
          style={{ color: "#ffffff", display: "flex", alignItems: "center" }}
        >
          <LightSpan>첫 구매라면 누구나 최대</LightSpan>
          <BoldSpan>2만원 할인받기</BoldSpan>
          <BiSolidDownload style={{ fontSize: "24px", marginLeft: "1.5px" }} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          right: "8px",
          padding: "12px",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <div style={{ color: "#ffffff", fontSize: "22px" }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#ffffff"
                stroke-width="2.5"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

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
