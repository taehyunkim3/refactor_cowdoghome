import { SignUpHeader } from "../../../components/pages/SignUpPage/SignUpHeader";
import { Content, Wrapper } from "./style";

export const SignUpLayout = ({ children }) => {
  return (
    <Wrapper>
      <SignUpHeader />
      <Content>{children}</Content>
    </Wrapper>
  );
};
