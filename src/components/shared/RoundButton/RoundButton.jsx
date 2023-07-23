import { RoundButtonLayout } from "./style";

/**
 * @param {string} href - 버튼 링크
 * @param {string} color - 버튼 색상 (blue, red, yellow, gray, transparent)
 * @param {string} size - 버튼 크기 (small, medium)
 * @param {string} text - 버튼 텍스트
 *
 */
export const RoundButton = ({
  href = "*",
  color = "transparent",
  size = "small",
  text = "버튼",
}) => {
  let pickedBgColor;
  let pickedTextColor = "#ffffff";
  switch (color.toUpperCase()) {
    case "BLUE":
      pickedBgColor = "#35c5f0";
      break;
    case "RED":
      pickedBgColor = "#f44336";
      break;
    case "YELLOW":
      pickedBgColor = "#ffeb3b";
      break;
    case "GRAY":
      pickedBgColor = "#9e9e9e";
      pickedBgColor = "#838d95";
      break;
    case "TRANSPARENT":
      pickedBgColor = "rgba(0, 0, 0, 0.1)";
      pickedTextColor = "#000000";
      break;
    default:
      pickedBgColor = "#3f51b5";
  }

  return (
    <>
      <RoundButtonLayout
        href={href}
        bgcolor={pickedBgColor}
        textcolor={pickedTextColor}
        size={size}
      >
        {text}
      </RoundButtonLayout>
    </>
  );
};
