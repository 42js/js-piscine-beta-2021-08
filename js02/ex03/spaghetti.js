let finishA = 0;
let finishB = 0;

function funcA() {
  console.log("A) 면을 삶고있어요...(10초)");
  let promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..! 다시다시");
      else resolve();
    }, 10000);
  });
  promiseA
    .then(() => {
      finishA = 1;
    })
    .catch((msg) => {
      console.log(msg);
      funcA();
    });
  return promiseA;
}

function funcB(num) {
  let promiseB = new Promise((resolve, reject) => {
    if (num == 1) {
      console.log("B1) 브로콜리를 대치고 있어요...(1초)");
      setTimeout(() => {
        if (Math.random() < 0.2) reject(["제작 실패..! 다시다시!", num]);
        else resolve(num);
      }, 1000);
    }
    if (num == 2) {
      console.log("B2) 마늘이랑 양파를 볶고 있어요...(2초)");
      setTimeout(() => {
        if (Math.random() < 0.2) reject(["제작 실패..! 다시다시!", num]);
        else resolve(num);
      }, 2000);
    }
    if (num == 3) {
      console.log("B3) 베이컨이랑 햄을 볶고 있어요...(2초)");
      setTimeout(() => {
        if (Math.random() < 0.2) reject(["제작 실패..! 다시다시!", num]);
        else resolve(num);
      }, 2000);
    }
    if (num == 4) {
      console.log("B4) 이제 남은 야채를 다같이 볶고 있어요..!! (3초)");
      setTimeout(() => {
        if (Math.random() < 0.2) reject(["제작 실패..! 다시다시!", num]);
        else resolve(num);
      }, 3000);
    }
    if (num > 4) finishB = 1;
  });
  promiseB
    .then((num) => {
      funcB(num + 1);
    })
    .catch(([msg, num]) => {
      console.log(msg);
      funcB(num);
    });
  return promiseB;
}

function funcC() {
  console.log("C) 이제 면까지 넣고 다 볶기만 하면...?!?(3초)");
  let promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..! 다시다시");
      else resolve();
    }, 3000);
  });
  promiseC
    .then(() => {
      console.log("~~~~~~드디어 제작 끝~~~~~~");
    })
    .catch((msg) => {
      console.log(msg);
      funcC();
    });
  return promiseC;
}

function startAB() {
  funcA();
  funcB(1);
  return new Promise((resolve, reject) => {
    let timer = setInterval(() => {
      if (finishA && finishB) {
        resolve();
        clearInterval(timer);
      }
    }, 1000);
  });
}

function init() {
  startAB().then(() => {
    funcC();
  });
}

init();
