import { InputContainer, TransparentBtn } from "./components";
import "./reset.css";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <TransparentBtn />
      <InputContainer />
    </>
  );
};
