window.onload = () => {
  let progress = document.querySelector(".energy");
  progress.value -= 10;
  progress.style.setProperty("--c", "red");

  setTimeout(() => {
    let progress = document.querySelectorAll("progress");
    progress.forEach((bar) => {
      bar.value += 5;
    });
  }, 5000);
};
