import { Footer, Header, TopBanner } from "../../../components";
import { Content, Wrapper } from "./style";

export const ItemDetailLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopBanner />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
