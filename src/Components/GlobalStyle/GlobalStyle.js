import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
      height:100%;
      color:#fff;
  }
  body, #root {
    min-height:100vh
  }
 
`;
export default GlobalStyle;
