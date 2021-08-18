let count = 0;

export default function setTimer(callback, interval)
{
    const intervalID = setInterval(() => {
        if (!callback(count))
            clearInterval(intervalID);
        count++;
    }, interval);
}