import { ThemeProvider } from "styled-components";
import "./reset.css";
import { Router } from "./routes";
import { theme } from "./style";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GlobalStyle } from "./style/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { useEffect } from "react";

const queryClient = new QueryClient();

export const App = () => {
  // // componentDidMount에서 실행되는 로직을 useEffect 훅에서 작성합니다.
  // useEffect(() => {
  //   // Kakao JavaScript SDK를 초기화합니다. YOUR_APP_KEY를 실제 앱 키로 대체합니다.
  //   window.Kakao.init(process.env.REACT_APP_REST_API_KEY);
  // }, []);  // 의존성 배열을 비워 두면 componentDidMount와 같은 역할을 합니다.

  return (
    <>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Router />
            </Provider>
          </ThemeProvider>
        </QueryClientProvider>
      </CookiesProvider>

    </>
  );
};
