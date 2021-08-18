let count = 0;

function setTimer(callback, interval) {
  setTimeout(() => {
    if (callback(count)) {
      count += 1;
      setTimer(callback, interval);
    } else clearTimeout(interval);
  }, interval);
}

export default setTimer;
