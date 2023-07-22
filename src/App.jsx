import {
  CircleButton,
  CircleImage,
  ItemDetailBubble,
  ItemImage,
  RoundButton,
} from "./components";
import "./reset.css";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <CircleImage />
      <ItemImage />
      <CircleButton />
      <RoundButton />
      <ItemDetailBubble />
    </>
  );
};
