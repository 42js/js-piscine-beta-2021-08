let count = 0;

export default function setTimer(callback, timeout)
{
    setTimeout(() => { 
        if (callback(count))
        {
            count++;
            setTimer(callback, timeout);
        }
    }, timeout);
}