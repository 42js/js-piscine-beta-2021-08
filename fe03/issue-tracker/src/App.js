import "./App.css";
import IssueList from "./IssueList";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Issue Tracker</h1>
      </header>
      <SearchBar />
      <IssueList owner="from97" repo="Woodies" />
    </div>
  );
}

export default App;
