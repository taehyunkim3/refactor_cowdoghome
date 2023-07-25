import { Header, TopBanner } from "../../../components";
import { Content, Footer, Wrapper } from "./style";

export const ItemDetailLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopBanner />
      <Header />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
