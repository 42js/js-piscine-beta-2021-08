import React from 'react';
import Issue from './Issue';

const IssueList = ({ crudIssue, list }) => {

    const issue = list.map(
        ({ title, body, user, number, comments_url, repository_url }) => (
            <Issue
                title={title}
                body={body}
                user={user.login}
                comments_url={comments_url}
                repository_url={repository_url}
                number={number}
                crudIssue={crudIssue}
                />
            )
        )

    return (
        <div>
            { issue }
        </div>
    )
};

export default IssueList;