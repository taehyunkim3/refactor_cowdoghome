import { Provider } from "react-redux";
import "./reset.css";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./style/GlobalStyle";
import { store } from "./redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Provider store={store}>
          <Router />
        </Provider>
      </QueryClientProvider>
    </>
  );
};
