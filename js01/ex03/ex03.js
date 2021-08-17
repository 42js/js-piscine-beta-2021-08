li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (event) {
        if (event.target) {
            event.target.style.backgroundColor = "red";
            alert(event.target.innerHTML);
        }
    }
    );
}