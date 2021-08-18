function randomFail() {
  if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const phase1 = () => {
  console.log("1. 반죽 만들기");
  setTimeout(() => {
    try {
      randomFail();
    } catch (e) {
      console.log(e);
      phase1();
      return;
    }
    phase2();
  }, 3000);
};

const phase2 = () => {
  console.log("2. 1차 발효");
  setTimeout(() => {
    try {
      randomFail();
    } catch (e) {
      console.log(e);
      phase2();
      return;
    }
    phase3();
  }, 5000);
};

const phase3 = () => {
  console.log("3. 성형 하기");
  setTimeout(() => {
    try {
      randomFail();
    } catch (e) {
      console.log(e);
      phase3();
      return;
    }
    phase4();
  }, 4200);
};

const phase4 = () => {
  console.log("4. 2차 발효");
  setTimeout(() => {
    try {
      randomFail();
    } catch (e) {
      console.log(e);
      phase4();
      return;
    }
    phase5();
  }, 2000);
};

const phase5 = () => {
  console.log("5. 튀기기");
  setTimeout(() => {
    try {
      randomFail();
    } catch (e) {
      console.log(e);
      phase5();
      return;
    }
  }, 5000);
};

phase1();
