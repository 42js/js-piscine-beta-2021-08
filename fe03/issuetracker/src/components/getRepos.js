import React from "react";
import axios from "axios";

// export const 

const getRepos = async (props) => {

    const headers = {
      Accept: "application/vnd.github.nightshade-preview+json",
      Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`
    };
    const url = `https://api.github.com/users/${props.user}/${props.repo}/issues`;
    const response = await axios.get(url, {
      headers: headers
    });
    const result = await response.json();
    console.log(result);

    return(
        <div>
            이게맞냐
        </div>
    );
}

export default getRepos;