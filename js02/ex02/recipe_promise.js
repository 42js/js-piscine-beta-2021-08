function randomFail() {
  if (Math.random() < 0.2) return true;
  return false;
}

const phase1 = () => {
  console.log("1. 반죽 만들기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 3000);
  })
    .then(() => {
      phase2();
    })
    .catch(() => {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      phase1();
    });
};

const phase2 = () => {
  console.log("2. 1차 발효");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 5000);
  })
    .then(() => {
      phase3();
    })
    .catch(() => {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      phase2();
    });
};

const phase3 = () => {
  console.log("3. 성형 하기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 4200);
  })
    .then(() => {
      phase4();
    })
    .catch(() => {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      phase3();
    });
};

const phase4 = () => {
  console.log("4. 2차 발효");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 2000);
  })
    .then(() => {
      phase5();
    })
    .catch(() => {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      phase4();
    });
};

const phase5 = () => {
  console.log("5. 튀기기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 5000);
  }).catch(() => {
    console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    phase5();
  });
};

phase1();
