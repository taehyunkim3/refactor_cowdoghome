import styled from "styled-components";

export const ItemCardWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  gap: 15px;
  width: 100%;

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 769px) and (max-width: 917px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 918px) and (max-width: 1154px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1154px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
