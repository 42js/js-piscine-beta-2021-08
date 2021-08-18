export function setTimer(callback, interval) {
  var count = { c: 0, timer: null };
  count.timer = setInterval(() => {
    if (!callback(count.c)) {
      clearInterval(count.timer);
    }
    count.c++;
  }, interval);
}
