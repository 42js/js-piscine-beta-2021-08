import React, { useEffect, useState } from "react";
import axios from "axios";
import IssueItem from "./IssueItem";

const IssueList = ({ owner, repo }) => {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  if (loading) return <div>로딩 중..</div>;
  if (error) return <div>에러 발생</div>;
  return (
    <div>
      {issues?.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
