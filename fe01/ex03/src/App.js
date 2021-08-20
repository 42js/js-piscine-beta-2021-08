import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Body from "./Body";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Noto Sans KR;
  font-size: 0.625rem;

}

.App {
  display: flex;
  flex-direction: column;
}

body {
  height: 100vh;
}

body, ul, li, nav, h1, div {
  all: unset;
}`;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 300px);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Menu />
        <Body />
      </Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
