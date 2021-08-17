/* eslint no-restricted-globals: ["off"] */

function displayClock() {
  const currentTime = new Date();
  const datetime = currentTime.toLocaleTimeString('ko-KR');
  const time = document.body.children[1].children[0];
  // const time = document.body.firstElementChild.nextElementSibling.firstChild;
  // const time = document.getElementsByTagName('time');
  time.setAttribute('datetime', 'ISO');
  time.innerHTML = datetime;
  console.log(time);
}

function displaySize() {
  const sizeInfos = {
    screen: { type: 'Screen', width: screen.width, height: screen.height },
    windowOuter: { type: 'Window Outer', width: window.outerWidth, height: window.outerHeight },
    windowInner: { type: 'Window Inner', width: window.innerWidth, height: window.innerHeight },
    document: { type: 'Document', width: document.body.clientWidth, height: document.body.clientHeight },
  };
  const ul = document.body.children[1].children[1];

  Object.keys(sizeInfos).forEach((sizeInfo) => {
    const li = document.createElement('li');
    li.append(`${sizeInfos[sizeInfo].type}: ${sizeInfos[sizeInfo].width} * ${sizeInfos[sizeInfo].height}`);
    ul.append(li);
  });
}

displayClock();
displaySize();
