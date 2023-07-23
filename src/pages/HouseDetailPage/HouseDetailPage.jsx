import { Button, CircleButton, Footer, Header } from "../../components";
import { HouseDetailPageLayout, MainLayout } from "./style";

export const HouseDetailPage = ({}) => {
  return (
    <>
      <Header />
      <HouseDetailPageLayout>
        <MainLayout>
          <CircleButton icon="plus" type="small" />
          <div>main</div>
        </MainLayout>
      </HouseDetailPageLayout>
      <Footer />
    </>
  );
};
