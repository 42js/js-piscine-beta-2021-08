import './App.css';

const App = ({form, children}) => {

  form = "입력할 부분";

  return (
    <main className="app">
      <div className="title">
        TodoList
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        할일 리스트 부분
        { children }
      </section>
    </main>
  );
};

export default App;
