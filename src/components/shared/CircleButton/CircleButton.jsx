import { CircleButtonLayer } from "./style";
import {
  MdOutlineArrowForwardIos,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { GoBookmark, GoShareAndroid } from "react-icons/go";
import { AiOutlineHeart, AiOutlineArrowUp } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";
import { HiPlusSm } from "react-icons/hi";
/**
 * @param {string} icon - 버튼 아이콘 (ArrowRight, Bookmark, Heart, List, ArrowUp, Bubble, Share, Plus)
 * @param {string} type - 버튼 타입 (default, gray, outline, small)
 * 선택 속성 사용시 버튼타입은 비우고 사용, 대소문자 구분 없음
 * @param {string} size - [선택] 버튼 크기 (default: 48px)
 * @param {string} font - [선택] 버튼 아이콘 크기 (default: 24px)
 * @param {string} color - [선택] 버튼 아이콘 색상 (default: #828282)
 * @param {string} bgColor - [선택] 버튼 배경 색상 (default: white)
 * @param {boolean} isShadow - [선택] 버튼 그림자 여부 (default: true)
 * @param {string} border - [선택] 버튼 테두리 (default: none)
 */
export const CircleButton = ({
  size = "48px",
  font = "24px",
  color = "#828282",
  bgColor = "white",
  isShadow = true,
  border = "none",
  icon = "ArrowRight",
  type = "none",
  setIsHovered = () => {},
}) => {
  let Icon;
  switch (icon.toUpperCase()) {
    case "ARROWRIGHT":
      Icon = MdOutlineArrowForwardIos;
      break;
    case "BOOKMARK":
      Icon = GoBookmark;
      break;
    case "HEART":
      Icon = AiOutlineHeart;
      break;
    case "LIST":
      Icon = MdOutlineFormatListBulleted;
      break;
    case "ARROWUP":
      Icon = AiOutlineArrowUp;
      break;
    case "BUBBLE":
      Icon = SlBubble;
      break;
    case "SHARE":
      Icon = GoShareAndroid;
      break;
    case "PLUS":
      Icon = HiPlusSm;
      break;
    default:
      Icon = MdOutlineArrowForwardIos;
  }
  switch (type.toUpperCase()) {
    case "DEFAULT":
      bgColor = "white";
      color = "#828c93";
      isShadow = true;
      break;
    case "GRAY":
      bgColor = "#f7f8fa";
      color = "#838d959e";
      isShadow = false;
      break;
    case "OUTLINE":
      bgColor = "white";
      color = "#838d959e";
      isShadow = false;
      border = "1px solid #D9D9D9";
      break;
    case "SMALL":
      bgColor = "rgba(53, 197, 240, 0.8)";
      color = "white";
      isShadow = false;
      border = "none";
      size = "18px";
      font = "20px";
      break;
    default:
  }

  return (
    <>
      <CircleButtonLayer
        size={size}
        font={font}
        color={color}
        bgColor={bgColor}
        shadow={isShadow}
        border={border}
        onMouseOver={setIsHovered}
      >
        <Icon />
      </CircleButtonLayer>
    </>
  );
};
// import { CircleButtonLayer } from "./style";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineFormatListBulleted,
// } from "react-icons/md";
// import { GoBookmark, GoShareAndroid } from "react-icons/go";
// import { AiOutlineHeart, AiOutlineArrowUp } from "react-icons/ai";
// import { SlBubble } from "react-icons/sl";
// import { HiPlusSm } from "react-icons/hi";
// /**
//  * @param {string} icon - 버튼 아이콘 (ArrowRight, Bookmark, Heart, List, ArrowUp, Bubble, Share, Plus)
//  * @param {string} type - 버튼 타입 (default, gray, outline, small)
//  * 선택 속성 사용시 버튼타입은 비우고 사용, 대소문자 구분 없음
//  * @param {string} size - [선택] 버튼 크기 (default: 48px)
//  * @param {string} font - [선택] 버튼 아이콘 크기 (default: 24px)
//  * @param {string} color - [선택] 버튼 아이콘 색상 (default: #828282)
//  * @param {string} bgColor - [선택] 버튼 배경 색상 (default: white)
//  * @param {boolean} isShadow - [선택] 버튼 그림자 여부 (default: true)
//  * @param {string} border - [선택] 버튼 테두리 (default: none)
//  */
// export const CircleButton = ({
//   size = "48px",
//   font = "24px",
//   color = "#828282",
//   bgColor = "white",
//   isShadow = true,
//   border = "none",
//   icon = "ArrowRight",
//   type = "none",
//   setIsHovered = () => {},
// }) => {
//   let Icon;
//   switch (icon.toUpperCase()) {
//     case "ARROWRIGHT":
//       Icon = MdOutlineArrowForwardIos;
//       break;
//     case "BOOKMARK":
//       Icon = GoBookmark;
//       break;
//     case "HEART":
//       Icon = AiOutlineHeart;
//       break;
//     case "LIST":
//       Icon = MdOutlineFormatListBulleted;
//       break;
//     case "ARROWUP":
//       Icon = AiOutlineArrowUp;
//       break;
//     case "BUBBLE":
//       Icon = SlBubble;
//       break;
//     case "SHARE":
//       Icon = GoShareAndroid;
//       break;
//     case "PLUS":
//       Icon = HiPlusSm;
//       break;
//     default:
//       Icon = MdOutlineArrowForwardIos;
//   }
//   switch (type.toUpperCase()) {
//     case "DEFAULT":
//       bgColor = "white";
//       color = "#828c93";
//       isShadow = true;
//       break;
//     case "GRAY":
//       bgColor = "#f7f8fa";
//       color = "#838d959e";
//       isShadow = false;
//       break;
//     case "OUTLINE":
//       bgColor = "white";
//       color = "#838d959e";
//       isShadow = false;
//       border = "1px solid #D9D9D9";
//       break;
//     case "SMALL":
//       bgColor = "rgba(53, 197, 240, 0.8)";
//       color = "white";
//       isShadow = false;
//       border = "none";
//       size = "18px";
//       font = "20px";
//       break;
//     default:
//   }

//   return (
//     <>
//       <CircleButtonLayer
//         size={size}
//         font={font}
//         color={color}
//         bgColor={bgColor}
//         shadow={isShadow}
//         border={border}
//         onMouseOver={setIsHovered}
//       >
//         <Icon />
//       </CircleButtonLayer>
//     </>
//   );
// };
