export function setTimer(callback, interval) {
    let i = 0;
    let rt = true;
    let id;

    function setIntervalCallback() {
        rt = callback(i);
        i++;
        if (!rt) clearInterval(id);
    }
    id = setInterval(setIntervalCallback, interval, i);
}
