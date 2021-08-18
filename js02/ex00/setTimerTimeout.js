export function setTimer(callback, interval) {
    let i = 0;
    let rt = true;

    function setTimeoutCallback(count) {
        rt = callback(count);
        if (rt) setTimeout(setTimeoutCallback, interval, ++count);
    }
    setTimeout(setTimeoutCallback, interval, i);
}
