function randomFail() {
  if (Math.random() < 0.8) throw String('제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
}

function setTimer(callback, interval) {
  const timeId = setTimeout(function start() {
    try {
      randomFail();
      callback();
      clearTimeout(timeId);
    } catch (e) {
      setTimeout(start, interval);
      console.log(e);
    }
  }, interval);
}

function showSuccess(stepTodo) {
  console.log(`${stepTodo} 성공!`);
}

function makeTwistedDoughnut() {
  const workSteps = {
    1: { todo: '반죽만들기', time: 3000 },
    2: { todo: '1차 발효', time: 5000 },
    3: { todo: '성형 하기', time: 4200 },
    4: { todo: '2차 발효', time: 2000 },
    5: { todo: '튀기기', time: 5000 },
  };
  Object.keys(workSteps).forEach((step) => {
    setTimer(showSuccess(step.todo), step.time);
  });
}

makeTwistedDoughnut();
