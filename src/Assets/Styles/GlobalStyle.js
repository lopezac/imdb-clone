import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1em;
  }

  * {
    box-sizing: border-box;
  }
`;

export const PageMainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FooterMainDiv = styled.div`
  margin-top: auto;
`;
