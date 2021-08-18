//setTimer => setTimeout 이용해 만들기

let count = -1;
export function setTimer(cb, intv) {
  setTimeout(() => {
    if (cb(++count)) setTimer(cb, intv);
  }, intv);
}
