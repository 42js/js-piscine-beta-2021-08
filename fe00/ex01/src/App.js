import React from 'react';
import ToDoListTemplate from './components/ToDoListTemplate';

function App() {
  return (
    <ToDoListTemplate form={ '입력' } >
      할 일들
    </ToDoListTemplate>
  );
}

export default App;
