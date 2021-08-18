export function setTimer(callback, interval) {
    let init = 0;

    function timer() {
        const timerId = setTimeout(() => {
            let ret = callback(init);
            if (ret === false)
                clearTimeout(timerId);
            else
                timer();
            init++;
        }, interval)
    }

    timer();
}