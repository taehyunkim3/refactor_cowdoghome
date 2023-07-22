import { styled } from "styled-components";

export const NavBarBox = styled.div`
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  height: 3.125em;
  border-bottom: 0.063em solid rgb(234, 237, 239);
  box-sizing: border-box;
  padding: 0 3.75em;

  @media (max-width: 768px) {
    padding: 0 0.8em;
  }
`;

export const NavItem = styled.span`
  color: ${(props) => props.color};
  height: 99%;
  font-size: 15px;
  margin: 0 5px;
  line-height: 3.125em;
  border-bottom: ${(props) => (props.underline ? "1px solid #35c5f0" : "none")};
  cursor: pointer;
`;
