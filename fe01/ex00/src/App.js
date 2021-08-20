import React from 'react';
import InputOnChange from './component/InputOnChange';
import InputOnClick from './component/InputOnClick';
class App extends React.Component {
  render() {
    return (
      <section className="App">
        <InputOnClick />
        <InputOnChange />
      </section> 
    );
  }
}
export default App;
