import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  html {
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
    width: 100%;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 2%;
`;

const GlobalContainer = styled.div`
  .html {
    height: 100%;
  }
  background-color: #03a9f4;
  height: 100%;
  width: 100%;
`;

export { GlobalContainer, BoardContainer, GlobalStyle };
