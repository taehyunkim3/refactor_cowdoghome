import styled from "styled-components";
import { ItemCardComponent } from "../components";

export const ItemCardWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(4, 1fr);
`;

export const MainItemView = ({}) => {
  const array = Array(20).fill(0);

  return (
    <ItemCardWrapper>
      {array.map((e, i) => {
        return <ItemCardComponent key={i} />;
      })}
    </ItemCardWrapper>
  );
};
