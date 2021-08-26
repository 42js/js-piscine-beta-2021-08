
import { Component } from 'react';
import './App.css';
import PrintAfterClick from './components/printAfterClick';
import PrintRealTime from './components/printRealTime';

class App extends Component {

  render () {
    return (
      <div id = "app">
         <div id = "click">
              <p> 첫번째 컴포넌트 </p>
             <PrintAfterClick />
        </div>
         <div id = "realtime">
              <p>두번쨰 컴포넌트</p>
              <PrintRealTime />
         </div>
      </div>
    )};
}
export default App;
