const appendList = (text) => {
  var list = document.createElement("li");
  list.innerText = text;
  document.body.children[1].children[1].appendChild(list);
};

var date = new Date();

var time = `${date.getHours() > 12 ? "오후" : "오전"} ${
  date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
}:${date.getMinutes()}:${date.getSeconds()}`;
document.body.children[1].children[0].setAttribute(
  "datetime",
  date.toISOString()
);
document.body.children[1].children[0].innerHTML = time;

appendList(`Screen: ${screen.width} * ${screen.height}`);
appendList(`Window Outer: ${window.outerWidth} * ${window.outerHeight}`);
appendList(`Window Inner: ${window.innerWidth} * ${window.innerHeight}`);
appendList(
  `Document: ${document.body.clientWidth} * ${document.body.clientHeight}`
);
