import React from "react";
import CreateFormStyled from "./CreateForm.styles";

const CreateForm = () => {
  return (
    <CreateFormStyled>
      <h2>Add New Issue</h2>
      <label htmlFor="issue_title">Issue Title</label>
      <input
        type="text"
        name="issue_title"
        placeholder="이슈 제목을 입력하세요"
      ></input>
      <label htmlFor="issue_body">Issue Content</label>
      <textarea
        placeholder="이슈 내용을 입력하세요"
        name="issue_body"
      ></textarea>
      <button type="button">이슈 생성</button>
    </CreateFormStyled>
  );
};

export default CreateForm;
