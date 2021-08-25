import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
          ToDoList
        </div>
        <section className="form-wrapper">
          입력 할 부분
        </section>
        <section className="todos-wrapper">
          할 일 리스트 부분
        </section>
      </main>
    );
  }
}

export default App;