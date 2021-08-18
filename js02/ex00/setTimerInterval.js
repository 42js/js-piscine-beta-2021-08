function setTimer(callback, interval) {
  let count = 0;
  const result = setInterval(() => {
    if (callback(count)) count += 1;
    else clearInterval(result);
  }, interval);
}

export default setTimer;
