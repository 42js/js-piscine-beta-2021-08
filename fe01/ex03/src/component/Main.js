import React from 'react';
import Menu from './Menu';
import { Home, Content1, Content2, Content3 } from './Pages';

import { createUseStyles } from 'react-jss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const useStyle = createUseStyles({
  page: {
    display: 'flex',
    textAlign: 'center',
  },
  content: {
    widh: '75%',
  },
  menu: {
    width: '25%',
  }
});

const Main = () => {

  const styles = useStyle();

  return (
    <div className={styles.page}>
      <BrowserRouter>
        <div className={styles.menu}>
          <Menu/>
        </div>
        <div className={styles.content}>
          <div>
            <h1>My Page !!</h1>
          </div>
          <div>
            <Switch>
            <Route exact path="/" component={ Home }/>
              <Route exact path="/1" component={ Content1 }/>
              <Route exact path="/2" component={ Content2 }/>
              <Route exact path="/3" component={ Content3 }/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main