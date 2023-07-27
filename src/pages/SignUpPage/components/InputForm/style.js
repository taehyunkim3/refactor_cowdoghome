import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  padding: 0.8125em 0.9375em 0.875em;
  font-size: 15px;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  border-radius: 0.25em;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #fafafa;
  }
`;

export const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
`;
