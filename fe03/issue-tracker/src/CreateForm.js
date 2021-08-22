import React, { useState } from "react";
import CreateFormStyled from "./CreateForm.styles";

const CreateForm = ({ handleAddClick }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <CreateFormStyled>
      <h2>Add New Issue</h2>
      <label htmlFor="issue_title">Issue Title</label>
      <input
        type="text"
        name="issue_title"
        placeholder="이슈 제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="issue_body">Issue Content</label>
      <textarea
        placeholder="이슈 내용을 입력하세요"
        name="issue_body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        type="button"
        onClick={() => {
          handleAddClick(title, body);
        }}
      >
        이슈 생성
      </button>
    </CreateFormStyled>
  );
};

export default CreateForm;
