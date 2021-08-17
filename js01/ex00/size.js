const time = document.body.children[1].children[0];
const ul = document.body.children[1].children[1];

var today = new Date();
time.innerHTML = today.toLocaleTimeString();

var content = `
<li>Screen: ${window.screen.width} * ${window.screen.height}</li>
<li>Window Outer: ${window.outerWidth} * ${window.outerHeight}</li>
<li>Window Inner: ${window.innerWidth} * ${window.innerHeight}</li>
<li>Document: ${document.documentElement.clientWidth} * ${document.documentElement.clientHeight}</li>
`;

ul.innerHTML = content;