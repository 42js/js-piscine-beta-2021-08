import React from "react";
import IssueItemStyled from "./IssueItem.styles";
import Label from "./Label";

const IssueItem = ({ issue }) => {
  console.log(issue.state, issue.user.login, issue.assignee?.login);
  return (
    <IssueItemStyled key={issue.id}>
      <IssueItemStyled.Assignee>
        {issue.assignee ? issue.assignee.login : "No Assignee"}
      </IssueItemStyled.Assignee>
      {issue.title}
      <IssueItemStyled.LabelList>
        {issue.labels?.map((label, index) => (
          <Label key={index} labelName={label.name} />
        ))}
      </IssueItemStyled.LabelList>
      <span className="modifyIssue">
        <button type="button" className="editButton">
          EDIT
        </button>
        <button type="button" className="closeButton">
          CLOSE
        </button>
      </span>
    </IssueItemStyled>
  );
};

export default IssueItem;
