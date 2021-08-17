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


const fifthStep = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(step5);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, sec5 * 1000);
  });
  promise.then(() => { console.log('꽈배기 하나 완성!'); }).catch((e) => { console.log(e); fifthStep(); });
}

const fourthStep = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(step4);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, sec4 * 1000);
  });
  promise.then(fifthStep).catch((e) => { console.log(e); fourthStep(); });
}

const thirdStep = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(step3);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, sec3 * 1000);
  });
  promise.then(fourthStep).catch((e) => { console.log(e); thirdStep(); });
}

const secondStep = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(step2);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, sec2 * 1000);
  });
  promise.then(thirdStep).catch((e) => { console.log(e); secondStep(); });
}

const firstStep = () => {
  let promise = new Promise((resolve, reject) => {
    console.log(step1);
    setTimeout(() => {
      if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      resolve();
    }, sec1 * 1000);
  });
  promise.then(secondStep).catch((e) => { console.log(e); firstStep() });
}

const fryDonut = () => { firstStep(); };

fryDonut();
