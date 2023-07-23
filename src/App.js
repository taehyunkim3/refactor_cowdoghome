import { ThemeProvider } from "styled-components";
import "./reset.css";
import { Router } from "./routes";
import { theme } from "./style";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};
