import styled, { css } from "styled-components";

const styles = {
  filled: {
    backgroundColor: "#35c5f0",
    color: "#fff",
    hover: {
      backgroundColor: "rgb(0, 159, 206)",
    },
  },
  empty: {
    backgroundColor: "#fff",
    color: "#35c5f0",
    hover: {
      backgroundColor: "rgb(239, 251, 255)",
    },
  },

  gray: {
    backgroundColor: "rgb(234, 237, 239)",
    color: "rgb(194, 200, 204)",
    hover: {
      backgroundColor: "rgb(234, 237, 239)", // Here you need to define what color you want when hover over the gray button.
    },
  },
};

export const FlexButtonStyle = styled.button`
  touch-action: manipulation;
  user-select: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$background
      ? styles[props.$background].backgroundColor
      : "transparent"};
  border-color: #35c5f0;

  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  width: 100%;
  flex: 1;

  ${(props) =>
    props.$background &&
    styles[props.$background].hover &&
    css`
      &:hover,
      &:active {
        background-color: ${styles[props.$background].hover.backgroundColor};
      }
    `}
`;
