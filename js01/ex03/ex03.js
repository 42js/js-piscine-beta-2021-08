const lists = document.getElementsByTagName("li");
const uls = document.querySelectorAll("ul");
console.log(uls);

uls[0].addEventListener("click", (e) => {
  console.log(e);
  alert(`${e.target.innerText} 먹고싶다`);
});

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("mouseover", () => {
    lists[i].style.background = "yellow";
  });
  lists[i].addEventListener("mouseout", () => {
    lists[i].style.background = "cornflowerblue";
  });
  lists[i].addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e);
    alert(`${e.target.innerText} 먹고싶다`);
  });
}
