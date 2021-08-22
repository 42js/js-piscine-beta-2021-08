import axios from "axios";
import React, { useEffect } from "react";

const Comments = ({ count, url }) => {
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      console.log(`loaded ${count} comments`);
    };
    fetchComments();
  });
  return <div>{count} comments</div>;
};

export default Comments;
