export function setTimer(callback, interval) {
    let init = 0;
 
    const interverId = setInterval(() => {
        let ret = callback(init);
        if (!ret) clearInterval(interverId);
        init++;
    }, interval);
}