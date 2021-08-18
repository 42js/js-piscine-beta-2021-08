const step1 = '1. 반죽 만들기 - 3초';
const step2 = '2. 1차 발효 - 5초';
const step3 = '3. 성형 하기 - 4.2초';
const step4 = '4. 2차 발효 - 2초';
const step5 = '5. 튀기기 - 5초';
const complete = '꽈배기 하나 완성!';
const steps = [step1, step2, step3, step4, step5, complete];

const sec1 = 3;
const sec2 = 5;
const sec3 = 4.2;
const sec4 = 2;
const sec5 = 5;
const seconds = [sec1, sec2, sec3, sec4, sec5]

const randomFail = () => {
  if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const oneStep = (i) => {
  console.log(steps[i]);
  if (i === 5) return;
  setTimeout(() => {
    try {
      randomFail();
      oneStep(i + 1);
    } catch (e) {
      console.log(e);
      oneStep(i);
    }
  }, seconds[i] * 1000);
}

const fryDonut = function() {
  oneStep(0);
}

fryDonut();