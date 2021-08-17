
window.addEventListener('scroll', () => {
  const articles = document.getElementsByTagName('article');
  if (this.oldScroll < this.scrollY) {
    for (const article of articles) {
      article.style.setProperty('background', 'pink');
    }
  } else {
    for (const article of articles) {
      article.style.removeProperty('background');
    }
  }
  this.oldScroll = this.scrollY;
});
