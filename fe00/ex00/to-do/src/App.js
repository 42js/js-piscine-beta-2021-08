import React, {Component} from 'react';
import './App.css'

function App() {
	return (
        <main className="todo-list-template">
            <div className="title">
                ToDoList
            </div>
            <section className="form-wrapper">
                <div>입력할 부분</div>
            </section>
            <section className="todos-wrapper">
                <div>할일 리스트 부분</div>
            </section>
        </main>
  );
}
export default App;
