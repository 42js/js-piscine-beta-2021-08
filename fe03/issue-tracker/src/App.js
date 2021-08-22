import React, { useState } from "react";
import "./App.css";
import IssueList from "./IssueList";
import SearchBar from "./SearchBar";

function App() {
  const [input, setInput] = useState("");
  const [repo, setRepo] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setRepo(input);
  };

  return (
    <div className="App">
      <header>
        <h1>My Issue Tracker</h1>
      </header>
      <SearchBar
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <IssueList owner="42js" repo={repo} />
    </div>
  );
}

export default App;
