import './ToDoListTemplate.css'
function ToDoListTemplate(){
  return(
  <div className="App">
    <section className="appname">
      <h1>ToDoList</h1>
    </section>
    <section className="app_input">
      <h2>Todo 입력하는 부분</h2>
    </section>
    <section className="app_display">
      <h2>Todo 출력하는 부분</h2>
    </section>
  </div>
  );
}

export default ToDoListTemplate;