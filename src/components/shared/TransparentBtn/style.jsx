import { styled } from "styled-components";

export const TransparentButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 4px;
  background: none;
  font-family: OhouseSans, Noto Sans KR, Apple SD Gothic Neo, ë§‘ì€ ê³ ë”•,
    Malgun Gothic, sans-serif;
  font-size: 14px;
  line-height: 20px;
  border-radius: 0.25em;
  padding: 6px 11px 7px 15px;
  box-sizing: border-box;
  font-weight: 400;
  border: 1px solid #dadde0;
  text-align: center;
  cursor: pointer;
  color: #2f3438;
`;
