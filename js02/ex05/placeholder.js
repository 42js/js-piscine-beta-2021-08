let randNum = []

for (var i = 0; i < 5; i++) randNum[i] = parseInt(Math.random() * 100);

console.log(randNum)

// function pull(postId) {
//     return new Promise((resolve, reject) => {
//     }).then((go) => {
//         console.log(go);
//     })
// }



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))

pull(randNum[0])