import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';

function App(){
  return (
    <TodoListTemplate form='입력할 부분'> 할일 리스트 부분 </TodoListTemplate>
  );
};

// import React, {Component} from 'react';
// class App extends Component{
//   render(){
//     return (
//       <TodoListTemplate form='입력할 부분'> 할일 리스트 부분 </TodoListTemplate>
//     );
//   }
// }

export default App;