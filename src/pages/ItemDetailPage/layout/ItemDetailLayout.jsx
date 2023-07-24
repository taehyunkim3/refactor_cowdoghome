import { Content, Footer, Header, Wrapper } from "./style";

export const ItemDetailLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
