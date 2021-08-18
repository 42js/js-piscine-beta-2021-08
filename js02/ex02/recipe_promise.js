function frying() {
  console.log('[2차 발효] 시작');
  const promiseSecondPhase = new Promise((resolve, reject) => {
    if (Math.random() <= 0.2) setTimeout(resolve, 5000);
    else setTimeout(reject, 5000);
  });
  promiseSecondPhase
    .then(() => {
      console.log('[튀기기] 성공');
      console.log('끝');
    })
    .catch(() => {
      console.log('[튀기기] 제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
      frying();
    });
}

function secondFermentation() {
  console.log('[2차 발효] 시작');
  const promiseSecondPhase = new Promise((resolve, reject) => {
    if (Math.random() <= 0.2) setTimeout(resolve, 2000);
    else setTimeout(reject, 2000);
  });
  promiseSecondPhase
    .then(() => {
      console.log('[2차 발효] 성공');
      frying();
    })
    .catch(() => {
      console.log('[2차 발효] 제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
      secondFermentation();
    });
}

function shapingBread() {
  console.log('[성형 하기] 시작');
  const promiseSecondPhase = new Promise((resolve, reject) => {
    if (Math.random() <= 0.2) setTimeout(resolve, 4200);
    else setTimeout(reject, 4200);
  });
  promiseSecondPhase
    .then(() => {
      console.log('[2차 발효] 성공');
      secondFermentation();
    })
    .catch(() => {
      console.log('[성형 하기] 제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
      shapingBread();
    });
}

function firstFermentation() {
  console.log('[1차 발효] 시작');
  const promiseSecondPhase = new Promise((resolve, reject) => {
    if (Math.random() <= 0.2) setTimeout(resolve, 5000);
    else setTimeout(reject, 5000);
  });
  promiseSecondPhase
    .then(() => {
      console.log('[1차 발효] 성공');
      shapingBread();
    })
    .catch(() => {
      console.log('[1차 발효] 제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
      firstFermentation();
    });
}

function makeBatch() {
  console.log('[반죽] 시작');
  const promiseFirstPhase = new Promise((resolve, reject) => {
    if (Math.random() <= 0.2) setTimeout(resolve, 3000);
    else setTimeout(reject, 3000);
  });
  promiseFirstPhase
    .then(() => {
      console.log('[반죽] 성공');
      firstFermentation();
    })
    .catch(() => {
      console.log('[반죽] 제작 실패..!(월급이 삭감되었다 ㅜㅜ)');
      makeBatch();
    });
}

makeBatch();
