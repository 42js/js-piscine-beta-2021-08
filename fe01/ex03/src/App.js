import reset from './css/Reset';
import { Global } from '@emotion/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './component/Menu';
import Home from './component/Home';
import Nothing from './component/Nothing';
import RealNothing from './component/RealNothing';
function App() {
  return (
    <section className='App'>
      <Global styles={reset} />
      <BrowserRouter>
        <Menu>/</Menu>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nothing' exact component={Nothing} />
          <Route path='/realnothing' exact component={RealNothing} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
