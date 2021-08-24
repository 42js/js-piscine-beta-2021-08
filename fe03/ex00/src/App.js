import { user } from 'octonode';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from 'react-bootstrap/Container';
import './App.css'
import { IssuesProvider } from './Contexts';
import Issues from './component/Issues';

function App() {


  return (
    <Container className="maintemplate">
      <IssuesProvider>
        <Issues page={1}/>
      </IssuesProvider>
    </Container>
  );
}


export default App;
