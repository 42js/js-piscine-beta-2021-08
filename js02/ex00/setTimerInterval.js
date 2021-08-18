//setTimer => setInterval 이용해 만들기

let count = -1;
export function setTimer(cb, intv) {
  let tid = setInterval(() => {
    if (!cb(++count)) clearInterval(tid);
  }, intv);
}
