

import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';

function App(){
  return (
      <TodoListTemplate form={<div>입력할 부분</div>}>
        <div>할일 리스트 부분</div>
      </TodoListTemplate>

  );
}
export default App;
