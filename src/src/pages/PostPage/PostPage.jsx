import { Header } from "../../components";
import { CommonLayout, MainLayoutInner } from "./style";
import { InputFile } from "./components";

export const PostPage = ({}) => {
  return (
    <CommonLayout>
      <Header />
      <MainLayoutInner>
        <InputFile />
      </MainLayoutInner>
    </CommonLayout>
  );
};
