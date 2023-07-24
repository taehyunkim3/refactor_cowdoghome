import styled from "styled-components";

export const SelectorWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SelectorStyle = styled.select`
  -webkit-appearance: none; /* Chrome, Safari 등 */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 기타 브라우저 */
  font-family: inherit;
  font-weight: inherit;
  flex: 1 0 auto;
  display: block;
  box-sizing: border-box;
  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding-right: 30px;
  background-image: none;
  width: 100%;
  font-size: 15px;
  border-radius: 4px;
  color: #424242;

  &:hover {
    background-color: #fafafa;
  }

  &:focus {
    outline: none;
  }
`;

export const SpanStyle = styled.span`
  line-height: 1;
  font-family: OhouseSans, Noto Sans KR, Apple SD Gothic Neo, 맑은 고딕,
    Malgun Gothic, sans-serif;
  letter-spacing: -0.4px;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0;
  cursor: default;
  pointer-events: none;
  color: #35c5f0;
`;

export const IconStyle = styled.svg`
  path {
    fill: #bdbdbd;
  }
`;

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

export const ErrorMsg = styled.div`
  padding-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 119, 119);
`;
