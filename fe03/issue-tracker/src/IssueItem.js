import React from "react";
import Comments from "./Comments";
import IssueItemStyled from "./IssueItem.styles";

const IssueItem = ({ issue }) => {
  return (
    <IssueItemStyled key={issue.id}>
      {issue.title} {issue.state} {issue.user.login} {issue.assignee.login}
      {issue.labels?.map((label, index) => (
        <span key={index}> {label.name} </span>
      ))}
      <Comments count={issue.comments} url={issue.comments_url} />
    </IssueItemStyled>
  );
};

export default IssueItem;
