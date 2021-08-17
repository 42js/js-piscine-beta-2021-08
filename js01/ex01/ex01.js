window.onload = ()=>{
    var value = document.
    getElementsByClassName('energy')[0].
    getElementsByTagName('progress')[0];
    value.value -= 10;
    value.attachShadow({mode:"open"});
    value.style.backgroundColor = 'rgb(255,0,0)';
}