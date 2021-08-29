import Header from './components/Header';
import Search from './components/Search';
import Issuelist from './components/Issuelist';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/list">
            <Issuelist />
          </Route> 
        </Switch>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
