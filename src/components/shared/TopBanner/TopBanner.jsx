import Coupon from "./CouponImage/coupon.png";
import { GrClose } from "react-icons/gr";

export const TopBanner = ({}) => {
  return (
    <div
      style={{
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
          flex: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img src={Coupon} style={{ height: "40px", paddingRight: 8 }} />
        <div style={{ color: "#ffffff" }}>
          <span>첫 구매라면 누구나 최대</span>
          <span>2만원 할인받기</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <div style={{ color: "#ffffff" }}>
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
                stroke-width="2"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
