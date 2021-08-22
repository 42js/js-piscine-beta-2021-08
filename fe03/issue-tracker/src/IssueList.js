import React, { useEffect, useState } from "react";
import axios from "axios";
import IssueItem from "./IssueItem";
import IssueListStyled from "./IssueList.style";

const IssueList = ({ owner, repo, openProps, openRef }) => {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!owner || !repo) return;
    const fetchIssues = async () => {
      try {
        const headers = {
          Accept: "application/vnd.github.v3+json",
        };

        setError(null);
        setIssues(null);
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/issues`,
          {
            headers,
          }
        );

        console.log(response.data);
        setIssues(response.data);
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    fetchIssues();
  }, [owner, repo]);

  if (!owner || !repo) return null;
  if (loading) return <IssueListStyled>로딩 중입니다..</IssueListStyled>;
  if (error)
    return <IssueListStyled>존재하지 않는 저장소입니다. </IssueListStyled>;
  return (
    <IssueListStyled>
      <button type="button" className="addIssue" {...openProps} ref={openRef}>
        + Add new issue
      </button>
      {issues?.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </IssueListStyled>
  );
};

export default IssueList;
