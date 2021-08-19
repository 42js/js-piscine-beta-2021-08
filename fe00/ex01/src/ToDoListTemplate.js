import React from "react";

export default function ToDoListTemplate() {
  return (
    <div>
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        <section className="inputSection">입력할 부분</section>
        <section className="listSection">할일 리스트 부분</section>
      </main>
    </div>
  );
}
