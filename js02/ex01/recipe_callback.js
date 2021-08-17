function randomFail() {
  if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const fifthStep = () => {
  console.log('5. 튀기기 - 5초');
  setTimeout(() => {
    try {
      randomFail();
      console.log('꽈배기 하나 완성!');
    } catch (e) {
      console.log(e);
      fifthStep();
    }
  }, 5 * 1000);
}

const fourthStep = () => {
  console.log('4. 2차 발효 - 2초');
  setTimeout(() => {
    try {
      randomFail();
      fifthStep();
    } catch (e) {
      console.log(e);
      fourthStep();
    }
  }, 2 * 1000);
}

const thirdStep = () => {
  console.log('3. 성형 하기 - 4.2초');
  setTimeout(() => {
    try {
      randomFail();
      fourthStep();
    } catch (e) {
      console.log(e);
      thirdStep();
    }
  }, 4.2 * 1000);
}

const secondStep = () => {
  console.log('2. 1차 발효 - 5초');
  setTimeout(() => {
    try {
      randomFail();
      thirdStep();
    } catch (e) {
      console.log(e);
      secondStep();
    }
  }, 5 * 1000);
}

const firstStep = () => {
  console.log('1. 반죽 만들기 - 3초');
  setTimeout(() => {
    try {
      randomFail();
      secondStep();
    } catch (e) {
      console.log(e);
      firstStep(step, second);
    }
  }, 3 * 1000);
}

const fryDonut = function() {
  firstStep();
}

fryDonut();