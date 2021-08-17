
const changeColorHotpink = (event) => {
  event.target.style.backgroundColor = 'hotpink';
}

const changeColorCornflowerblue = (event) => {
  event.target.style.backgroundColor = 'cornflowerblue';
}

const li = document.getElementsByTagName('li');

for (const element of li) {
  element.addEventListener('mouseover', changeColorHotpink);
  element.addEventListener('mouseout', changeColorCornflowerblue);
  element.addEventListener('click', () => {alert("선택 완료")});
}
