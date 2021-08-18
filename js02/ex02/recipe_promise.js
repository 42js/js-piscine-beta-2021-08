const step1 = '1. 반죽 만들기 - 3초';
const step2 = '2. 1차 발효 - 5초';
const step3 = '3. 성형 하기 - 4.2초';
const step4 = '4. 2차 발효 - 2초';
const step5 = '5. 튀기기 - 5초';

const sec1 = 3;
const sec2 = 5;
const sec3 = 3;
const sec4 = 4;
const sec5 = 5;

const oneStep = (step, second, resolve, reject) => {
  console.log(step);
  setTimeout(() => {
    if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    resolve();
  }, second * 1000);
}

const fifthStep = () => {
  let promise = new Promise((resolve, reject) => {
    oneStep(step5, sec5, resolve, reject);
  });
  promise.then(() => { console.log('꽈배기 하나 완성!'); }).catch((e) => { console.log(e); fifthStep(); });
}

const fourthStep = () => {
  let promise = new Promise((resolve, reject) => {
    oneStep(step4, sec4, resolve, reject);
  });
  promise.then(fifthStep).catch((e) => { console.log(e); fourthStep(); });
}

const thirdStep = () => {
  let promise = new Promise((resolve, reject) => {
    oneStep(step3, sec3, resolve, reject);
  });
  promise.then(fourthStep).catch((e) => { console.log(e); thirdStep(); });
}

const secondStep = () => {
  let promise = new Promise((resolve, reject) => {
    oneStep(step2, sec2, resolve, reject);
  });
  promise.then(thirdStep).catch((e) => { console.log(e); secondStep(); });
}

const firstStep = () => {
  let promise = new Promise((resolve, reject) => {
    oneStep(step1, sec1, resolve, reject);
  });
  promise.then(secondStep).catch((e) => { console.log(e); firstStep() });
}

const fryDonut = () => { firstStep(); };

fryDonut();
