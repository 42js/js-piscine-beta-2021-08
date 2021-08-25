import React from 'react';
import ToDoListTemplate from './components/ToDoListTemplate';
import Input from './components/Input';
import ItemList from './components/ItemList';


function App() {
  return (
    <ToDoListTemplate form={<Input/>} >
      <ItemList/>
    </ToDoListTemplate>
  );
}

export default App;
