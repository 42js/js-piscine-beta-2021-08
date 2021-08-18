import axios from "axios";

let randNum = []

for (var i = 0; i < 5; i++) randNum[i] = parseInt(Math.random() * 100);

console.log(randNum)

async function pull(postId) {
    try {
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const comment = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        console.log(`제목 : ${post.data.title}\n`);
        console.log(post.data.body);
        comment.data.map((com) => {
			console.log('---');
			console.log(`댓글 작성자: ${com.name}`);
			console.log(`이메일: ${com.email}`);
			console.log(com.body);
		});
        console.log("");
    }
    catch (e) {
        console.log(e);
    }
}

randNum.map(postId => {
    pull(postId);
})