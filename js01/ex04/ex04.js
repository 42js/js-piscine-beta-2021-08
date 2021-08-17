const article = document.querySelectorAll('article');

document.addEventListener('scroll', function () {

    let currentScroll = document.documentElement.scrollTop;

    console.log(`Current pos : ${currentScroll}`);
    
    for (var i = 0; i < article.length; i++) {

        const pos = article[i].getBoundingClientRect();

        console.log(`article [${i + 1}] pos : ${pos.bottom}`);

        if (pos.bottom < 300) article[i].style.visibility = 'hidden';
        else if (pos.bottom >= 300 && pos.bottom < 700) article[i].style.visibility = 'visible';
        else if (pos.bottom >= 700) {
            if (currentScroll > 3800) article[article.length - 1].style.visibility = 'visible';
            else article[i].style.visibility = 'hidden';
        }
    };
    console.log(""); 
});