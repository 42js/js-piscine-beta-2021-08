var printNum = function(count) {
    console.log(count);
    return count < 3;
}
function setTimer(printNum, msec){
    var count = 0;
    setTimeout(function run(){
        if (printNum(count++))
            setTimeout(run, msec);
        else
            return;
    }, msec, count);
}

function setTimer2(printNum, msec){
    var count = 0;
    var inter = setInterval(function run(){
        if (printNum(count++))
            ;
        else
            clearInterval(inter);
    }, msec, count);
}
setTimer2(printNum, 2000);
// function square(x, callback) { 
//     setTimeout(callback, 100, x*x); 
// } 
// square(2, function(number) { 
//     console.log(number); 
// });