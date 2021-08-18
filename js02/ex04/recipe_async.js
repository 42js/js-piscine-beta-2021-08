function randomFail() {
  if (Math.random() < 0.2) return true;
  return false;
}

const phase = (interval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomFail()) reject();
      resolve();
    }, interval);
  });
};

const main = async () => {
  var loop = true;
  do {
    console.log("1. 반죽 만들기");
    try {
      await phase(3000);
      loop = false;
    } catch {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    }
  } while (loop);

  loop = true;
  do {
    console.log("2. 1차 발효");
    try {
      await phase(5000);
      loop = false;
    } catch {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    }
  } while (loop);

  loop = true;
  do {
    console.log("3. 성형 하기");
    try {
      await phase(4200);
      loop = false;
    } catch {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    }
  } while (loop);

  loop = true;
  do {
    console.log("4. 2차 발효");
    try {
      await phase(2000);
      loop = false;
    } catch {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    }
  } while (loop);

  loop = true;
  do {
    console.log("5. 튀기기");
    try {
      await phase(5000);
      loop = false;
    } catch {
      console.log("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
    }
  } while (loop);
};

main();
