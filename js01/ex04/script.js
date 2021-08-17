var scrollTop = document.documentElement.scrollTop;
var direction = null;

document.addEventListener("scroll", () => {
  if (scrollTop < document.documentElement.scrollTop) direction = "down";
  else direction = "up";
  scrollTop = document.documentElement.scrollTop;
  if (direction === "up") document.body.style.backgroundColor = "#D7DFD6";
  else document.body.style.backgroundColor = "#D3D8FF";
});
