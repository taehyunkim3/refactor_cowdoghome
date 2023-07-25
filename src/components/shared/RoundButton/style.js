import { styled } from "styled-components";

export const RoundButtonLayout = styled.a`
  display: inline-block;
  margin: 0;
  padding: ${(props) =>
    props.size === "small" ? "4px 12px 4px 12px" : "11px 26px 12px"};

  border: none;
  background-color: ${(prop) => prop.bgcolor};
  color: ${(prop) => prop.textcolor};
  border-radius: 45px;
  font: inherit;
  font-size: ${(props) => (props.bgcolor === "#f5f5f5" ? "13px" : "14px")};
  font-weight: 700;
  line-height: 22px;
  box-shadow: 0 2px 6px 0 rgba(53, 197, 240, 0.2);
  transition: background-color 0.1s;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
`;
