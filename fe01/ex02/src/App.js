import Header from './components/Header'
import Menu from './components/Menu'
import MainContent from './components/Maincontent';

import dummy from './db/data.json';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './components/EmptyPage';
/*
function App() {

  return (
    <BrowserRouter>
    <div>
      <Header></Header>
      <Menu></Menu>
      <Switch>
        <Route exact path="/">
          <MainContent id="0" />
        </Route>
        <Route path="/본과정">
          <MainContent id="1"/>
        </Route>
        <Route path="/JS과정">
          <MainContent id="2"/>
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
  
}
*/

function App() {
  
  const posts = dummy.posts.map(post=>(
    <Route key={post.id} path={"/" + post.title}>
        <MainContent id={post.id} />
    </Route>
  ));
  
  return (
    <BrowserRouter>
    <div>
      <Header></Header>
      <Menu></Menu>
      <Switch>
        <Route exact path="/">
          <MainContent id="0" />
        </Route>
        {posts};
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
  
}
export default App;
