export default function setTimer(callback, interval) {
  let count = 0;

  const timerId = setInterval(() => {
    if (!callback(count)) clearInterval(timerId);
    count += 1;
  }, interval);
}
