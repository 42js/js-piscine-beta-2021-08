import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Menu from './components/Menu';
import Header from './components/Header';
import Body from './components/Body';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        },
      }}
    >
      <GlobalStyle />
      <Header className="header" titleName="FE01EX02" />
      <Menu menu="menu" />
      <Body className="body" content="home" />
    </ThemeProvider>
  );
}

export default App;
