export default function setTimer(callback, interval) {
  let count = 0;
  const timeId = setTimeout(function go() {
    if (!callback(count)) clearTimeout(timeId);
    else setTimeout(go, interval);
    count += 1;
  }, interval);
}
