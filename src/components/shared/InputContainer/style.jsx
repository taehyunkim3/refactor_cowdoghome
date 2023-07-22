import { styled } from "styled-components";

export const InputBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  border-radius: 0.25em;

  & > label {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => (props.error ? "#FF7777" : "#dadde0")};
    box-shadow: ${(props) => (props.isFocused ? "0 0 0 2px #2fb8eb" : "none")};
    border-radius: 0.25em;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0.8125em 0.9375em 0.875em;
  font-size: 15px;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  border-radius: 0.25em;
  &:focus {
    outline: none;
  }
`;
