let today = new Date();

const time = document.body.children[1].children[0];
const list = document.body.children[1].children[1];

var row = `<li>Screen: ${screen.width} * ${screen.height}</li>
           <li>Window Outer: ${window.outerWidth} * ${window.outerHeight}</li>
           <li>Window Inner: ${window.innerWidth} * ${window.innerHeight}</li>
           <li>Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}</li>`;
           
time.innerHTML = today.toLocaleTimeString();
list.innerHTML = row;