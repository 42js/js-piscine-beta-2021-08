const Menus = document.querySelectorAll("li");
Menus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    menu.style.setProperty("background", "blue");
  });
  menu.addEventListener("mouseleave", () => {
    menu.style.setProperty("background", "cornflowerblue");
  });
  menu.addEventListener("click", () => {
    alert(menu.innerText);
  });
});
