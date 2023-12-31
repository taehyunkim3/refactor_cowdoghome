import { styled } from "styled-components";
import mainIcon from "../../../../../assets/icons/mainIcon.svg";

export const CowDogHomeLogo = styled.div`
  background-image: url(${mainIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 11.25rem;
  height: 2.3375rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10rem;
    height: 1.66875rem;
  }
`;
