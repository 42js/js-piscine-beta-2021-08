export function setTimer(callback, interval) {
    let init = 0;

    function func() {    
        const timeoutId = setTimeout(() => {
            let ret = callback(init);
            if (!ret) clearTimeout(timeoutId);
            else func();
            init++;
        }, interval);
    }

    func();
}