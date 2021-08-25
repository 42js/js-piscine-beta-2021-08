import './ToDoListTemplate.css';

function App() {
  return (
    <main className='todo-list-template'>
      <div className='title'>
        오늘 할 일
      </div>
      <section className="form-wrapper">
        입력
      </section>
      <section className="todos-wrapper">
        할 일
      </section>
    </main>
  );
}

export default App;
