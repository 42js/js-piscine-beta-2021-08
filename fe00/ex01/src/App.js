import './App.css';
import todolist from "./ToDoListTemplate";
import './ToDoListTemplate.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">ToDoList</h1>
      {todolist()}
    </div>
  );
}

export default App;
