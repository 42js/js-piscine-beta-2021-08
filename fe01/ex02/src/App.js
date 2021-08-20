import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';

const Page = styled.section`
  font-family: Arial;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

function App() {
  return (
    <Page>
      <Header />
      <Contents>
        <Menu className="menu" />
        <Body className="body" />
      </Contents>
    </Page>
  );
}

export default App;
