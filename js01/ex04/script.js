let beforePosition = document.documentElement.scrollTop;
const lastArticle = document.querySelector("main").lastElementChild;
const articles = document.getElementsByTagName("article");

window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const lastArticleBottom = lastArticle.getBoundingClientRect().bottom;
    const afterPosition = document.documentElement.scrollTop;
    //console.log(afterPosition);

    if (beforePosition < afterPosition) {
        if (windowHeight + 50 > lastArticleBottom) {
            alert("bottom");
        }
        for (const article of articles) {
            article.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = "grey";
    } else {
        if (100 > afterPosition) {
            alert("top");
        }
        for (const article of articles) {
            article.style.backgroundColor = "#eeeeee";
        }
        document.body.style.backgroundColor = "white";
    }
    beforePosition = afterPosition;
});
