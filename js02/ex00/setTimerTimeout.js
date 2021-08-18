export function setTimer(printNum, msec){
    let count = 0;
    setTimeout(function run(){
        if (printNum(count++))
            setTimeout(run, msec);
        else
            return;
    }, msec, count);
}