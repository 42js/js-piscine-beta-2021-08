const workSteps = {
  A: { todo: '면삶기', time: 10000 },
  B: {
    1: { todo: '브로콜리 데치기', time: 1000 },
    2: { todo: '마늘과 양파 볶기', time: 2000 },
    3: { todo: '베이컨과 햄 볶기', time: 2000 },
    4: { todo: '소스, 남은 야채 넣고 다같이 볶기', time: 3000 },
  },
  C: { todo: '면까지 넣고 다 같이 볶기', time: 3000 },
};

const promiseA = function makePromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 1.0) {
      reject(String(`stepA[${workSteps.A.todo}] 실패---`));
    } else {
      setTimeout(resolve('A'), workSteps.A.time);
    }
  });
};

const promiseB = function makePromiseB(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`stepB${step}[${workSteps.B[step].todo}] 완료---`);
      resolve(step);
    }, workSteps.B[step].time);
  });
};

promiseA()
  .then(
    (result) => console.log(`stepA[${workSteps[result].todo}] 완료---`),
    (error) => {
      console.log(error);
    },
  );
promiseB(1)
  .then(
    (result) => promiseB(result + 1),
  )
  .then(
    (result) => promiseB(result + 1),
  );

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`stepA[${workSteps.A.todo}] 완료---`);
//   }, workSteps.A.time);
//   setTimeout(() => {
//     console.log(`stepB1[${workSteps.B.B1.todo}] 완료---`);
//   }, workSteps.B.B1.time);
//   setTimeout(() => {
//     console.log(`stepB2[${workSteps.B.B2.todo}] 완료---`);
//   }, workSteps.B.B2.time);
//   setTimeout(() => {
//     console.log(`stepB3[${workSteps.B.B3.todo}] 완료---`);
//   }, workSteps.B.B3.time);
// }).then(() => {
//   console.log('end!!');
// });
