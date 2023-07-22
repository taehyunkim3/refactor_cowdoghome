import styled from "styled-components";

export const SelectorWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const SelectorStyle = styled.select`
  font-family: inherit;
  font-weight: inherit;
  -webkit-appearance: none;
  -webkit-box-flex: 1;
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
  border-color: ${(props) => (props.focus ? "#35c5f0" : "#bdbdbd")};

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
    fill: ${(props) => (props.focus ? "#35c5f0" : "#bdbdbd")};
  }
`;
