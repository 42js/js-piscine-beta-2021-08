import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import InputForm from './components/Input';
import ItemList from './components/ItemList';

function App(){
  return (
      <TodoListTemplate form={<InputForm/>}>
        <ItemList/>
      </TodoListTemplate>
  );
}
export default App;
