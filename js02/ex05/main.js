const wrapEl = document.querySelector(".wrap");
for (var i = 0; i < 5; i++){
	let randNum = parseInt(Math.random() * 100);
	let info = fetch(`https://jsonplaceholder.typicode.com/todos/${randNum}`)
	.then(response => response.json())
	.then(json => json)
	let divEl = document.createElement('div');
	divEl.innerHTML = info['title'];
	wrapEl.appendChild(divEl);
	console.log(info);
}
//gg
