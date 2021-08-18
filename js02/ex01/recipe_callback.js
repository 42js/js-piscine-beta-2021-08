function randomFail(todo, minus) {
  if (Math.random() < 0.5) throw String(`${todo} 실패..!(월급${minus}만큼 삭감되었다 ㅜㅜ)`);
}

function showSuccess(stepTodo) {
  console.log(`${stepTodo} 성공!`);
}

function checkComplete(step) {
  if (step > 5) {
    console.log('꽈베기 완성@^.^@');
    return true;
  }
  return false;
}

function checkFireSunpark(salary) {
  if (salary <= 0) {
    console.log('sunpark 해고....');
    return true;
  }
  return false;
}

function makeTwistedDoughnut(callback) {
  const workSteps = {
    1: { todo: '반죽만들기', time: 3000, minus: 5 },
    2: { todo: '1차 발효', time: 5000, minus: 10 },
    3: { todo: '성형 하기', time: 4200, minus: 15 },
    4: { todo: '2차 발효', time: 2000, minus: 20 },
    5: { todo: '튀기기', time: 5000, minus: 25 },
  };
  let salary = 50;
  let step = 1;
  const timeId = setTimeout(function go() {
    try {
      callback(workSteps[step].todo, workSteps[step].minus);
      clearTimeout(timeId);
      showSuccess(workSteps[step].todo);
      step += 1;
      if (checkComplete(step)) step = 1;
    } catch (e) {
      console.log(e);
      salary -= workSteps[step].minus;
      if (checkFireSunpark(salary)) return;
    }
    setTimeout(go, workSteps[step].time);
  }, workSteps[step].time);
}

makeTwistedDoughnut(randomFail);
