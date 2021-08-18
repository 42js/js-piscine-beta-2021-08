export function setTimer(callback, interval) {
    let init = 0;
    
    const id = setInterval(() => {
        let ret = callback(init);
        if (ret === false)
            clearInterval(id);
        init++;
    }, interval);
}