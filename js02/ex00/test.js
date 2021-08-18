import setTimer from './setTimerTimeout.js';

function printNum(count) {
  console.log(count);
  return count < 3;
}

setTimer(printNum, 100); // 0 1 2 3 <= 각각 100ms의 간격으로 출력됨.
