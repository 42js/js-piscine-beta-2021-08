const recursiveCallBack = (count, callback, interval) => {
  setTimeout(() => {
    if (callback(count.c)) {
      count.c++;
      recursiveCallBack(count, callback, interval);
    }
  }, interval);
};

export function setTimer(callback, interval) {
  var count = { c: 0 };
  recursiveCallBack(count, callback, interval);
}
