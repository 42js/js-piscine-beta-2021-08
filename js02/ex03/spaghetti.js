function randomFail() {
  if (Math.random() < 0.2) return true;
  return false;
}

finA = false;
finB = false;

const A = () => {
  console.log("A. 면 삶기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 10000);
  })
    .then(() => {
      finA = true;
      C();
    })
    .catch(() => {
      console.log("A. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      A();
    });
};

const B1 = () => {
  console.log("B1. 브로콜리 대치기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 1000);
  })
    .then(() => {
      B2();
    })
    .catch(() => {
      console.log("B1. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      B1();
    });
};

const B2 = () => {
  console.log("B2. 마늘과 양파 볶기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 2000);
  })
    .then(() => {
      B3();
    })
    .catch(() => {
      console.log("B2. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      B2();
    });
};

const B3 = () => {
  console.log("B3. 배이컨과 햄 볶기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 2000);
  })
    .then(() => {
      B4();
    })
    .catch(() => {
      console.log("B3. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      B3();
    });
};

const B4 = () => {
  console.log("B4. 소스, 남은 야채 넣고 다같이 볶기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 3000);
  })
    .then(() => {
      finB = true;
      C();
    })
    .catch(() => {
      console.log("B4. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
      B4();
    });
};

const C = () => {
  if (!finA || !finB) return;
  console.log("C. 면까지 넣고 다 같이 볶기");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, 3000);
  }).catch(() => {
    console.log("C. 제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    C();
  });
};

A();
B1();
