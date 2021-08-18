const allLi = document.querySelectorAll('li');
console.log(allLi);
for (let i = 0; i < allLi.length; i++)
{
	allLi[i].addEventListener('mouseover', handleIn);
	allLi[i].addEventListener('mouseout', handleOut);
	allLi[i].addEventListener('click', handleClick);
}
// const ulEL = document.querySelector('ul');
// ulEL.addEventListener('click', handleClick);

function handleIn(e){
	e.stopPropagation();
	e.target.style.background = 'green';
}

function handleOut(e){
	e.stopPropagation();
	e.target.style.background = 'cornflowerblue';
}

function handleClick(e){
	console.log(e);
	e.stopPropagation();
	// 이벤트가 상위 요소에 전달되지 않도록 막아준다.
	//ex) 부모요소에도 addEventListener있으면 실행되는데 막아줌.
	alert('선택한 메뉴는 ' + e.target.innerText + '입니다');
}
