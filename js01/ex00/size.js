const time = document.body.children[1].children[0];
const date = new Date();

time.attributes[0].value = Date();
time.innerText = date.toLocaleTimeString(window.navigator.language);

const ul = document.body.children[1].children[1];
ul.innerHTML = `
  <li>Screen: ${window.screen.width} * ${window.screen.height}</li>
  <li>Window Outer: ${window.outerWidth} * ${window.outerHeight}</li>
  <li>Window Inner: ${window.innerWidth} * ${window.outerHeight}</li>
  <li>Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}</li>
`