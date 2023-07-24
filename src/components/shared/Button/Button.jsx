import { ButtonStyle } from "./ButtonStyle";

/***
 * @param {string} label - 버튼 이름
 * @param {string} theme - filled / empty / gray
 * @param {string} size - small / large
 * @param {string} b - [선택] 넣을 경우 굵은 글씨
 */
export const Button = ({
  label = "label",
  theme = "filled",
  size = "small",
  b = false,
  onClick
}) => {
  return (
    <div style={{ display: "flex", flex: 1 }} onClick={onClick}>
      <ButtonStyle theme={theme} size={size} b >
        <div>{label}</div>
      </ButtonStyle>
    </div>
  );
};
