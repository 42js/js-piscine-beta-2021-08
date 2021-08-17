let last_known_scroll_position = 0;
let ticking = false;
const body = document.querySelector('body');

function upScroll(scroll_pos) {
  body.style.backgroundColor = 'red';
}
function downScroll(scroll_pos) {
  body.style.backgroundColor = 'blue';
}

window.addEventListener('scroll', function(e) {
  // console.log(last_known_scroll_position)
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (last_known_scroll_position < window.scrollY)
        downScroll(last_known_scroll_position);
      else
        upScroll(last_known_scroll_position);
      last_known_scroll_position = window.scrollY;
      ticking = false;
    });
    ticking = true;
  }
});

const allH1 = document.querySelectorAll('h1');
for (let i= 0; i < allH1.length; i++)
	allH1[i].addEventListener('click',handleP);

const allH2 = document.querySelectorAll('h2');
for (let i= 0; i < allH2.length; i++)
	allH2[i].addEventListener('click',handleP);


const allP = document.querySelectorAll('p');
for (let i= 0; i < allP.length; i++)
	allP[i].addEventListener('click',handleP);

function handleP(e){
  this.style.color = 'yellow';
  let info = this.getBoundingClientRect();
  // console.log(info);
  alert(`*선택한 요소 정보*
  bottom: ${info.bottom}
  height: ${info.height}
  left: ${info.left}
  right: ${info.right}
  top: ${info.top}
  width: ${info.width}
  x: ${info.x}
  y: ${info.y}
  `)
}
