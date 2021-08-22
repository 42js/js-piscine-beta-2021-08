import React, { useState } from "react";
import "./App.css";
import IssueList from "./IssueList";
import SearchBar from "./SearchBar";
import Dialog from "./Dialog/Dialog";
import useToggleDialog from "./Dialog/useToggleDialog";
import { OverlayContainer } from "@react-aria/overlays";
import CreateForm from "./CreateForm";
import axios from "axios";

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

  const handleAddClick = (_title, _body) => {
    const fetchNewIssue = async () => {
      try {
        const headers = {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
        };
        const response = await axios.post(
          `https://api.github.com/repos/from97/Woodies/issues`,
          {
            headers,
            data: {
              title: _title,
              body: _body,
            },
          }
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNewIssue();
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
        owner="from97"
        repo={repo}
        openProps={openButtonProps}
        openRef={openButtonRef}
      />
      {state.isOpen && (
        <OverlayContainer>
          <Dialog>
            <CreateForm handleAddClick={handleAddClick} />
          </Dialog>
        </OverlayContainer>
      )}
    </div>
  );
}

export default App;
