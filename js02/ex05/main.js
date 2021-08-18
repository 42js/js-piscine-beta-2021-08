import axios from "axios";

const printPost = async (id) => {
  var post;
  var comments;
  try {
    post = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.data);
    comments = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.data);
  } catch (e) {
    console.log("error");
  }
  console.log(`제목: ${post.title}\n\n${post.body}`);
  comments.forEach((e) => {
    console.log("---");
    console.log(`댓글 작성자: ${e.name}`);
    console.log(`이메일: ${e.email}`);
    console.log(e.body);
  });
  console.log();
};

for (var i = 0; i < 5; i++) printPost(Math.floor(Math.random() * 100) + 1);
