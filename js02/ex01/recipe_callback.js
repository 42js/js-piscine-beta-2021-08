function randomFail() {
  if (Math.random() < 0.2) throw String('제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
}

function showSuccess(stepTodo) {
  console.log(`${stepTodo} 성공!`);
}

function showFail(stepTodo) {
  console.log(`${stepTodo} 실패...`);
}

function makeTwistedDoughnut(callback) {
  const workSteps = {
    1: { todo: '반죽만들기', time: 3000 },
    2: { todo: '1차 발효', time: 5000 },
    3: { todo: '성형 하기', time: 4200 },
    4: { todo: '2차 발효', time: 2000 },
    5: { todo: '튀기기', time: 5000 },
  };
  let step = 1;
  const timeId = setTimeout(function go() {
    try {
      callback();
      clearTimeout(timeId);
      showSuccess(workSteps[step].todo);
      step += 1;
    } catch (e) {
      showFail(workSteps[step].todo);
      console.log(e);
    }
    if (step > 5) throw String('꽈베기 완성@^.^@');
    setTimeout(go, workSteps[step].time);
  }, workSteps[step].time);
}

try {
  makeTwistedDoughnut(randomFail);
} catch (e) {
  console.log(e);
}
