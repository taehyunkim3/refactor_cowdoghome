import { ThemeProvider } from "styled-components";
import "./reset.css";
import { Router } from "./routes";
import { theme } from "./style";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </>
  );
};
