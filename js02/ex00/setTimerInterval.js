
const setTimer = (callback, interval) => {
    let count = 0;
    let timerId = setInterval(() => {
        if (callback(count++) === false)
            clearInterval(timerId);
    }, interval);
}

export default setTimer;