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
  return new Promise((resolve, reject) => {
    if (step <= 5) {
      console.log(`- ${workSteps[step].todo} 시작 -`);
      while (Math.random() < 0.2) {
        console.log(`${workSteps[step].todo} 실패...`);
        console.log(`- ${workSteps[step].todo} 다시 시작 -`);
      }
      setTimeout(() => {
        showSuccess(workSteps[step].todo);
        resolve(step);
      }, workSteps[step].time);
    } else {
      reject(String('꽈배기 완성@^.^@'));
    }
  });
};

promise(1)
  .then(
    (result) => promise(result + 1),
    (error) => console.log(error),
  )
  .then(
    (result) => promise(result + 1),
    (error) => console.log(error),
  )
  .then(
    (result) => promise(result + 1),
    (error) => console.log(error),
  )
  .then(
    (result) => promise(result + 1),
    (error) => console.log(error),
  )
  .then(
    (result) => promise(result + 1),
    (error) => console.log(error),
  )
  .catch((error) => console.log(error));
