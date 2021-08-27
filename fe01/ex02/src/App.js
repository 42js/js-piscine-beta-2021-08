import { Route } from 'react-router-dom';
import Header from './component/Header';
import Nav from './component/Nav';
import Home from './component/Home';
import Introduce from './component/Introduce'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <body>
          <Route exact path="/" component={Home}/>
          <Route exact path="/introduce" component={Introduce}/>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
