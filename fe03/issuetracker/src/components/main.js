import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {

    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');

    const onUserChange = (e) => {
        setUser(e.target.value);
    }

    const onRepoChange = (e) => {
        setRepo(e.target.value);
    }

    return(
        <form>
            <label htmlFor="user">username: </label>
            <input
                className="user"
                type="text"
                onChange={onUserChange}
            />
            <label htmlFor="repo">repository: </label>
            <input
                className="repo"
                type="text"
                onChange={onRepoChange}
            />
            <Link to={{
	            pathname: '/search',
		        state: { user: user, repo: repo },
            }}>
                <button>Search</button>
            </Link>
        </form>
    )
}

export default Main;