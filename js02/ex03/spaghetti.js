const stepA = 'A. 면 삶기 - 10초';
const stepB1 = 'B1. 브로콜리 데치기 - 1초';
const stepB2 = 'B2. 마늘과 양파 볶기 - 2초';
const stepB3 = 'B3. 베이컨과 햄 볶기 - 2초';
const stepB4 = 'B4. 소스, 남은 야채 넣고 다같이 볶기 - 3초';
const stepC = 'C. 면까지 넣고 다 같이 볶기 - 3초';

const secA = 10;
const secB1 = 1;
const secB2 = 2
const secB3 = 2;
const secB4 = 3;
const secC = 3;

let bDone = false;
let aDone = false;

const doStepC = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepC);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secC * 1000);
  });
  promise
    .then(() => { console.log('C 끝!'); console.log('스파게티 한 그릇 완성!'); })
    .catch((e) => { console.log(e); doStepC(); });
}

const doStepB4 = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepB4);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secB4 * 1000);
  });
  promise
    .then(() => { console.log('B4 끝!'); bDone = true; if (aDone) doStepC(); })
    .catch((e) => { console.log(e); doStepB4() });
}

const doStepB3 = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepB3);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secB3 * 1000);
  });
  promise
    .then(() => { console.log('B3 끝!'); doStepB4(); })
    .catch((e) => { console.log(e); doStepB3() });
}

const doStepB2 = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepB2);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secB2 * 1000);
  });
  promise
    .then(() => { console.log('B2 끝!'); doStepB3(); })
    .catch((e) => { console.log(e); doStepB2() });
}

const doStepB1 = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepB1);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secB1 * 1000);
  });
  promise
    .then(() => { console.log('B1 끝!'); doStepB2(); })
    .catch((e) => { console.log(e); doStepB1() });
}

const doStepA = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(stepA);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, secA * 1000);
  });
  promise
    .then(() => { console.log('A 끝!'); aDone = true; if (bDone) doStepC(); })
    .catch((e) => { console.log(e); doStepA() });
}

doStepA();
doStepB1();
