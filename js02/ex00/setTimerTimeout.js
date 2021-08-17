
const setTimer = (callback, interval) => {
    let count = 0;
    setTimeout(function run() {
            if (callback(count++) === false)
                return;
            setTimeout(run, interval);
        }, interval);
};

export default setTimer;