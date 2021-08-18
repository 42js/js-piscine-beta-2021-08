import axios from "axios";

function getRandomNumbers(num) {
	const array = Array(100).fill(0).map((cur, prev) => prev + 1);
	const chosen = [];
	while (array.length > 100 - num)
		chosen.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
	return chosen;
};

async function getPostAndComments(id){
	try {
		const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		console.log(`제목: ${post.data.title}\n`);
		console.log(post.data.body);
		comments.data.map((comment) => {
			console.log('---');
			console.log(`댓글 작성자: ${comment.name}`);
			console.log(`이메일: ${comment.email}`);
			console.log(comment.body);
		});
		console.log();
	} catch (e) {
		console.log(`error! ${e}`);
	}
}

getRandomNumbers(5).map((id) => {
	getPostAndComments(id);
})

