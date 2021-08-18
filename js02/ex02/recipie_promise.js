function showSuccess(stepTodo) {
  console.log(`${stepTodo} 성공!`);
}

const workSteps = {
  1: { todo: '반죽만들기', time: 3000, minus: 5 },
  2: { todo: '1차 발효', time: 5000, minus: 10 },
  3: { todo: '성형 하기', time: 4200, minus: 15 },
  4: { todo: '2차 발효', time: 2000, minus: 20 },
  5: { todo: '튀기기', time: 5000, minus: 25 },
};

const promise = function makePromise(step) {
  while (Math.random() < 0.2) {
    console.log(`${workSteps[step].todo} 실패...`);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(step), workSteps[step].time);
  });
};

promise(1)
  .then((result) => {
    showSuccess(workSteps[result].todo); // 반죽만들기
    return promise(result + 1);
  }, (error) => {
    console.log(error);
  })
  .then((result) => {
    showSuccess(workSteps[result].todo); // 1차 발효
    return promise(result + 1);
  }, (error) => {
    console.log(error);
  })
  .then((result) => {
    showSuccess(workSteps[result].todo); // 성형 하기
    return promise(result + 1);
  }, (error) => {
    console.log(error);
  })
  .then((result) => {
    showSuccess(workSteps[result].todo); // 2차 발효
    return promise(result + 1);
  }, (error) => {
    console.log(error);
  })
  .then((result) => {
    showSuccess(workSteps[result].todo); // 튀기기
    console.log('꽈배기 완성@^.^@');
  }, (error) => {
    console.log(error);
  })
  .catch((error) => promise(error));
