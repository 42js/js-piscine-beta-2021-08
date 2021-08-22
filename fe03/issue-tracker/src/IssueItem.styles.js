import styled from "styled-components";

export const IssueItemStyled = styled.li`
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5px;
  font-size: 1.6rem;
  color: #444;
  padding: 10px;
  position: relative;

  :hover {
    background-color: #eef;
  }

  .modifyIssue {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  button {
    font-size: 1.4rem;
    font-family: "Apple SD";
    font-weight: bold;
    color: #aaa;
    cursor: pointer;

    :hover {
      color: #4f57af;
    }
  }

  .editButton {
    margin-right: 10px;
  }
`;

IssueItemStyled.Assignee = styled.div`
  width: fit-content;
  background-color: #ddd;
  color: #555;
  padding: 2px 5px;
  border-radius: 8px;
  margin-bottom: 5px;
`;

IssueItemStyled.LabelList = styled.div`
  margin: 5px 0;
  .label {
    font-size: 1.3rem;
    margin-right: 10px;
    color: #6c75c1;
    letter-spacing: 0.1rem;
  }
`;

export default IssueItemStyled;
