import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background2};
    transition: background-color 0.3s ease;
  }
`;

export default GlobalStyle;