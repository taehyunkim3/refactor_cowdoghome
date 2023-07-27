import { Footer, Header, TopBanner } from "../../../components";
import { Wrapper, Content } from "./style";

export const MainPageLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopBanner />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
