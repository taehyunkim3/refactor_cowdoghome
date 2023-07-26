import { Header, TopBanner } from "../../../components";
import { Wrapper, Content, Footer } from "./style";

export const MainPageLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopBanner />
      <Header />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
