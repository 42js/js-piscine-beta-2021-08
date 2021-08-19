import './App.css';
import ToDoList from "./ToDoListTemplate";
import './ToDoListTemplate.css';

function App() {
  const 입력 = <ToDoList className="입력" name="입력할 부분"/>
  const 출력 = <ToDoList className="출력" name="할일 리스트 부분"/>
  return (
    <div className="App">
      <h1 className="title">ToDoList</h1>
      {입력}
      {출력}
    </div>
  );
}

export default App;
