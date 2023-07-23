import { Wrapper, Header, Content, Footer } from "./style";

export const MainPageLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
