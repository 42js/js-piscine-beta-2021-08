let count = 0;

function setTimer(callback, interval) {
  const result = setTimeout(() => {
    if (!callback(count)) clearTimeout(result);
    else {
      count += 1;
      setTimer(callback, interval);
    }
  }, interval);
}
export { setTimer };
