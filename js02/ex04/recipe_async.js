const step1 = '1. 반죽 만들기 - 3초';
const step2 = '2. 1차 발효 - 5초';
const step3 = '3. 성형 하기 - 4.2초';
const step4 = '4. 2차 발효 - 2초';
const step5 = '5. 튀기기 - 5초';
const complete = '꽈배기 하나 완성!';

const sec1 = 3;
const sec2 = 5;
const sec3 = 4.2;
const sec4 = 2;
const sec5 = 5;

const randomFail = (reject) => {
  if (Math.random() < 0.2) reject("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
}

const working = (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomFail(reject);
      resolve();
    }, second * 1000);
  })
}

const eachStep = async function (step, second) {
  console.log(step);
  await working(second)
    .catch(async function(e) {
      console.log(e);
      await eachStep(step, second);
    });
}

const fryDonut = async function () {
  await eachStep(step1, sec1);
  await eachStep(step2, sec2);
  await eachStep(step3, sec3);
  await eachStep(step4, sec4);
  await eachStep(step5, sec5);
  await console.log(complete);
}

fryDonut();