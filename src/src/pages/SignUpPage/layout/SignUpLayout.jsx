import { SignUpHeader } from "../components";
import { Content, Wrapper } from "./style";

export const SignUpLayout = ({ children }) => {
  return (
    <Wrapper>
      <SignUpHeader />
      <Content>{children}</Content>
    </Wrapper>
  );
};
