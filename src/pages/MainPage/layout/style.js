import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  background-color: gray;
`;

export const Header = styled.div`
  display: block;
  position: relative;
  background-color: #caeae5;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  background-color: #f4f1f9;
`;

export const Footer = styled.div`
  display: block;
  position: relative;
  background-color: #f6e8ea;
  padding: 40px 0px;
`;
