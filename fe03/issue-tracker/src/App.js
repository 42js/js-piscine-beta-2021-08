import React, { useState } from "react";
import "./App.css";
import IssueList from "./IssueList";
import SearchBar from "./SearchBar";
import Dialog from "./Dialog/Dialog";
import useToggleDialog from "./Dialog/useToggleDialog";
import { OverlayContainer } from "@react-aria/overlays";

function App() {
  const [input, setInput] = useState("");
  const [repo, setRepo] = useState("");
  const { state, openButtonProps, openButtonRef } = useToggleDialog();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
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
      <IssueList
        owner="42js"
        repo={repo}
        openProps={openButtonProps}
        openRef={openButtonRef}
      />
      {state.isOpen && (
        <OverlayContainer>
          <Dialog>Add new issue Modal!</Dialog>
        </OverlayContainer>
      )}
    </div>
  );
}

export default App;
