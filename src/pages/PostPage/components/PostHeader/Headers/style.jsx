import { styled } from "styled-components";

export const HeaderBox = styled.div`
  height: calc(5em - 0.063em); // 기본 web
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  text-align: center;
  padding: 0 3.75em;
  box-sizing: content-box;
  line-height: 0;
  transition: top 0.1s ease 0s;
  border-bottom: 0.063em solid rgb(234, 237, 239);

  @media (max-width: 768px) {
    height: calc(3.125em - 0.063em); // mobile
    padding: 0.1em;
    display: flex;
    justify-content: space-around;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 3.75em;
  z-index: 9999;
  grid-column: 1;
  @media (max-width: 768px) {
    position: static;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  grid-column: 4;
`;

export const PostButtonBox = styled.div`
  width: ${({ width }) => width || "auto"};
`;

export const iconStyle = {
  marginRight: "0.5em",
  paddingLeft: "0.875em",
  color: "#2f3438",
};
