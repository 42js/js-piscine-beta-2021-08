const body = document.querySelector("body");
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    //pageYOffset, scrollTop: y축 이동거리 (브라우저에 따라 다름)
    if (st > lastScrollTop) body.style.backgroundColor = "lemonchiffon";
    else body.style.backgroundColor = "lavenderblush";
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

const allArticle = document.querySelectorAll("article");
for (let i = 0; i < allArticle.length; i++)
  allArticle[i].addEventListener("click", handleArticle);

function handleArticle(e) {
  this.style.backgroundColor = "orange";
  let info = this.getBoundingClientRect();
  alert(`*선택한 요소 정보*
   bottom: ${info.bottom}
   height: ${info.height}
   left: ${info.left}
   right: ${info.right}
   top: ${info.top}
   width: ${info.width}
   x: ${info.x}
   y: ${info.y}
   `);
}
