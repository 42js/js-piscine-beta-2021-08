import { setTimer } from "./setTimerInterval.js";

function printNum(count) {
  console.log(count);
  return count < 3;
}

setTimer(printNum, 1000); // 0 1 2 3 <= 각각 100ms의 간격으로 출력됨.
