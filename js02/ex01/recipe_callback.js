function randomFail() {
  if (Math.random() < 0.2) throw "제작 실패..! (월급이 삭감되었다 ㅜㅜ)";
}

let flag = 1;

function makeDough() {
  console.log("1) 반죽 만드는 중...");
  setTimeout(() => {
    try {
      randomFail();
      primaryFerment(); //error가 나면 이부분은 실행되지 않음
    } catch (e) {
      // error 가 났을때만 catch문 실행됨
      console.log(e);
      makeDough();
    }
  }, 3000);
}

function primaryFerment() {
  console.log("2) 1차 발효중...");
  setTimeout(() => {
    try {
      randomFail();
      shape();
    } catch (e) {
      console.log(e);
      primaryFerment();
    }
  }, 5000);
}

function shape() {
  console.log("3) 모양 만드는 중...");
  setTimeout(() => {
    try {
      randomFail();
      secondaryFerment();
    } catch (e) {
      console.log(e);
      shape();
    }
  }, 4200);
}
function secondaryFerment() {
  console.log("4) 2차 발효중...");
  setTimeout(() => {
    try {
      randomFail();
      fry();
    } catch (e) {
      console.log(e);
      secondaryFerment();
    }
  }, 2000);
}
function fry() {
  console.log("5) 튀기는 중...");
  setTimeout(() => {
    try {
      randomFail();
      console.log("제작 완성!!!");
    } catch (e) {
      console.log(e);
      fry();
    }
  }, 5000);
}

makeDough();
