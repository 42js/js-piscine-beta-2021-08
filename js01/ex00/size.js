function getTime() {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return `${hour}:${min}:${sec}`;
}

function setInnerHtmlTime(str) {
  let ampm = '오전';
  const timeval = str.split(':');
  if (timeval[0] > 12) {
    ampm = '오후';
    timeval[0] -= 12;
  }
  if (timeval[1] >= 0 && timeval[1] <= 9) timeval[1] = `0${timeval[1]}`;
  if (timeval[2] >= 0 && timeval[2] <= 9) timeval[2] = `0${timeval[2]}`;
  return ` ${ampm} ${timeval[0]}:${timeval[1]}:${timeval[2]}`;
}

function getSize() {
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  document.body.children[1].children[1].append(li1, li2, li3, li4);
  document.body.children[1].children[1].children[0].append(
    `Screen: ${screen.width} * ${screen.height}`
  );
  document.body.children[1].children[1].children[1].append(
    `Window Outer: ${window.outerWidth} * ${window.outerHeight}`
  );
  document.body.children[1].children[1].children[2].append(
    `Window Inner: ${window.innerWidth} * ${window.innerHeight}`
  );
  document.body.children[1].children[1].children[3].append(
    `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`
  );
}

window.onload = function size() {
  const time = document.getElementsByTagName('time');
  time[0].setAttribute('datetime', getTime());
  time[0].innerHTML = setInnerHtmlTime(time[0].getAttribute('datetime'));
  getSize();
};
