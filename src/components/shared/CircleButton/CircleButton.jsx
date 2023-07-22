import { CircleButtonLayer } from "./style";
import {
  MdOutlineArrowForwardIos,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { GoBookmark, GoShareAndroid } from "react-icons/go";
import { AiOutlineHeart, AiOutlineArrowUp } from "react-icons/ai";
import { SlBubble } from "react-icons/sl";
/***

 * @param {string} icon - 버튼 아이콘 (ArrowRight, Bookmark, Heart, List, ArrowUp, Bubble, Share)
 * @param {string} type - 버튼 타입 (default, gray, outline)
 * 선택 속성 사용시 버튼타입은 비우고 사용
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
}) => {
  let Icon;
  switch (icon) {
    case "ArrowRight":
      Icon = MdOutlineArrowForwardIos;
      break;
    case "Bookmark":
      Icon = GoBookmark;
      break;
    case "Heart":
      Icon = AiOutlineHeart;
      break;
    case "List":
      Icon = MdOutlineFormatListBulleted;
      break;
    case "ArrowUp":
      Icon = AiOutlineArrowUp;
      break;
    case "Bubble":
      Icon = SlBubble;
      break;
    case "Share":
      Icon = GoShareAndroid;
      break;
    default:
      Icon = MdOutlineArrowForwardIos;
  }
  switch (type) {
    case "default":
      bgColor = "white";
      color = "#828c93";
      isShadow = true;
      break;
    case "gray":
      bgColor = "#f7f8fa";
      color = "#838d959e";
      isShadow = false;
      break;
    case "outline":
      bgColor = "white";
      color = "#838d959e";
      isShadow = false;
      border = "1px solid #D9D9D9";
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
      >
        <Icon />
      </CircleButtonLayer>
      CircleButton
    </>
  );
};
