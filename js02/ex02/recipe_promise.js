function randomFail() {
  if (Math.random() < 0.2) throw '제작 실패..!(월급이 삭감되었다 ㅜㅜ)';
}

class ReceipePromise {
  makeBatch() {
    return new Promise((resolve, reject) => {
      console.log('반죽 시작');
      setTimeout(() => {
        try {
          randomFail();
          const result = '반죽 성공';
          resolve(result);
        } catch (error) {
          console.error(error);
          reject(this.error);
        }
      }, 100);
    });
  }

  // firstFermentation(onSuccess, onError) {
  //   console.log('1차 발효 시작');
  //   setTimeout(() => {
  //     try {
  //       randomFail();
  //       const result = '1차 발효 성공';
  //       onSuccess(result);
  //     } catch (error) {
  //       console.error(error);
  //       onError(this.firstFermentation(onSuccess, onError));
  //     }
  //   }, 5000);
  // }

  // shapingBread(onSuccess, onError) {
  //   console.log('성형 하기 시작');
  //   setTimeout(() => {
  //     try {
  //       randomFail();
  //       const result = '성형 하기 성공';
  //       onSuccess(result);
  //     } catch (error) {
  //       console.error(error);
  //       onError(this.shapingBread(onSuccess, onError));
  //     }
  //   }, 4200);
  // }

  // secondFermentation(onSuccess, onError) {
  //   console.log('2차 발효 시작');
  //   setTimeout(() => {
  //     try {
  //       randomFail();
  //       const result = '2차 발효 성공';
  //       onSuccess(result);
  //     } catch (error) {
  //       console.error(error);
  //       onError(this.secondFermentation(onSuccess, onError));
  //     }
  //   }, 2000);
  // }

  // frying(onSuccess, onError) {
  //   console.log('튀기기 시작');
  //   setTimeout(() => {
  //     try {
  //       randomFail();
  //       const result = '튀기기 성공';
  //       onSuccess(result);
  //     } catch (error) {
  //       console.error(error);
  //       onError(this.frying(onSuccess, onError));
  //     }
  //   }, 5000);
  // }
}

const recipePromise = new ReceipePromise();

recipePromise
  .makeBatch()
  .catch(() => {})
  .then((result) => console.log(result));
