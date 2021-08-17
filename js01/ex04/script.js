articles = document.querySelectorAll("article");

document.addEventListener("scroll", function () {
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].getBoundingClientRect().y < 300) {
            console.log("articles"+ i + ": " + articles[i].getBoundingClientRect().y);
            console.log("current: " + document.documentElement.scrollTop);
            articles[i].style.visibility = "hidden";
        }
        if (articles[i].getBoundingClientRect().y > 700) {
            console.log("articles"+ i + ": " + articles[i].getBoundingClientRect().y);
            console.log("current: " + document.documentElement.scrollTop);
            articles[i].style.visibility = "visible";
        }
    }
}
);