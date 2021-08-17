function getTime() {
  let clock = document.body.children[1].children[0];
  const date = new Date();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  let XX;

  if (hours >= 12) {
    XX = "오후";
    hours -= 12;
  } else XX = "오전";
  clock.setAttribute("datetime", `${hours}:${minutes}:${seconds}`);
  clock.textContent = `${XX} ${hours}:${minutes}:${seconds}`;
}

function getScreenSize() {
  let li = document.createElement("li");
  li.textContent = `Screen: ${screen.width} * ${screen.height}`;
  document.body.children[1].children[1].appendChild(li);
}

function getWindowSize() {
  let li = document.createElement("li");
  li.textContent = `Window Outer: ${window.outerWidth} * ${window.outerHeight}`;
  document.body.children[1].children[1].appendChild(li);
  li = document.createElement("li");
  li.textContent = `Window Inner: ${window.innerWidth} * ${window.innerHeight}`;
  document.body.children[1].children[1].appendChild(li);
}

function getDocumentSize() {
  let li = document.createElement("li");
  li.textContent = `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`;
  document.body.children[1].children[1].appendChild(li);
}

function init() {
  getTime();
  getScreenSize();
  getWindowSize();
  getDocumentSize();
}

init();
