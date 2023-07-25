import { styled, css } from "styled-components";

const ButtonTheme = {
  filled: {
    backgroundColor: "#35c5f0",
    color: "#fff",
    hover: {
      backgroundColor: "rgb(0, 159, 206)",
    },
  },
  empty: {
    backgroundColor: "#fff",
    color: "rgb(53, 197, 240)",
    border: "1px solid rgb(53, 197, 240)",
    hover: {
      backgroundColor: "rgb(239, 251, 255)",
    },
  },

  gray: {
    backgroundColor: "rgb(247, 248, 250)",
    color: "rgb(194, 200, 204)",
    border: "1px solid rgb(218, 220, 224)",
    hover: {
      backgroundColor: "rgb(234, 237, 239)",
    },
  },
};

export const ButtonStyle = styled.button`
  display: flex;
  flex: 1;
  text-decoration: none;
  justify-content: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  cursor: pointer;
  align-items: center;
  padding-top: ${(props) => (props.size === "large" ? "16px" : "12px")};
  padding-bottom: ${(props) => (props.size === "large" ? "16px" : "12px")};
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  border: 1px solid transparent;
  font: inherit;
  border-radius: 4px;
  background-color: ${(props) => ButtonTheme[props.theme].backgroundColor};
  color: ${(props) => ButtonTheme[props.theme].color};
  font-size: ${(props) => (props.size === "large" ? "17px" : "14px")};
  font-weight: ${(props) => (props.b ? "700" : "400")};
  border: ${(props) => ButtonTheme[props.theme].border};
  ${(props) =>
    css`
      &:hover,
      &:active {
        background-color: ${ButtonTheme[props.theme].hover.backgroundColor};
      }
    `}
`;
