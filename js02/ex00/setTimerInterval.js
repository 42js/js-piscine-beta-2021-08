const setTimer = function(callback, interval) {
  let count = 0;
  const id = setInterval(function() {
    let ret = callback(count);
    if (ret == false) {
      clearInterval(id);
    }
    count++;
  }, interval);
}

export { setTimer };