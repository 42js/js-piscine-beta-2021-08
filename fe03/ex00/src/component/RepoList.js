import React from 'react';
import Repo from './Repo';

const RepoList = ({ handleRepoClick, list }) => {

    const repo = list.items.map(
        ({ name, owner }) => (
            <Repo
                handleRepoClick={handleRepoClick}
                repo_name={name}
                repo_owner={owner.login}
                owner_avatar={owner.avatar_url}
            />
        )
    )
    
    return (
        <div>
            {repo}
        </div>
    );
};

export default RepoList;