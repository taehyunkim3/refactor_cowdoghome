import { styled } from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: calc(5em - 0.063em); // 기본 web
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 0 1em;
  box-sizing: content-box;
  line-height: 0;
  position: fixed;
  transition: top 0.1s ease 0s;
  border-bottom: 0.063em solid rgb(234, 237, 239);

  @media (max-width: 768px) {
    height: calc(3.125em - 0.063em); // mobile
    padding: 0.1em;
    justify-content: cetter;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SignBox = styled.div`
  width: 9.15em;
  height: 2.5em;
  box-sizing: border-box;
  margin-top: 0.438em;
  @media (max-width: 768px) {
    width: 5.5em;
    margin-top: 1.2em;
    margin-right: 0;
  }
`;

export const SignBtn = styled.button`
  border: none;
  background: none;
  margin-top: 0.32em;
  height: 49%;
  font-size: 0.875em;
  color: #2f3438;
  border-right: 0.063em solid #eaedef;
  line-height: 1.125em;
  &:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const PostBtn = styled.button`
  width: 94.64px;
  height: 40px;
  @media (max-width: 768px) {
    width: 5.5em;
  }
`;

export const iconStyle = {
  marginRight: "0.5em",
  paddingLeft: "0.875em",
  color: "#2f3438",
};
