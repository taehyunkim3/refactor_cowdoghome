import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  @font-face {
    font-family: 'Jal_Onuel';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Jal_Haru';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Haru.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
}
`;
