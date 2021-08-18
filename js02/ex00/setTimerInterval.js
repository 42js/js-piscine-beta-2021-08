let count = -1;
export default function setTimer(cb, e){
    let timerID = setInterval(() => {
        if (!cb(++count)) clearInterval(timerID);
    }, e);
}