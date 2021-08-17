const setTimer = function(callback, interval) {
  const initial = true;
  const count = 0;
  const innerTimer = function(callback, interval, count, initial) {
    if (initial == true) {
      initial = false;
      setTimeout(innerTimer, interval, callback, interval, count, initial);
    } else {
      if (callback(count) == false)
        return;
      count++;
      setTimeout(innerTimer, interval, callback, interval, count, initial);
    }
  }
  innerTimer(callback, interval, count, initial);
}

export { setTimer };