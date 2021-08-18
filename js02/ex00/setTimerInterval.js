export function setTimer(printNum, msec){
    let count = 0;
    const inter = setInterval(function run(){
        if (printNum(count++))
            ;
        else
            clearInterval(inter);
    }, msec, count);
}