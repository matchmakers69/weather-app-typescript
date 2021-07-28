import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

 
 ${reset}
 *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem; 
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme: { colors } }) => colors.whiteColor}
   
  }

  #root {
    width: 100%;
    height: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  `;

export default GlobalStyles;