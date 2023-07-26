import { ThemeProvider } from "styled-components";
import "./reset.css";
import { Router } from "./routes";
import { GlobalStyle, theme } from "./style";
import { Provider } from "react-redux";
import { store } from "./redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Router />
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>

    </>
  );
};
