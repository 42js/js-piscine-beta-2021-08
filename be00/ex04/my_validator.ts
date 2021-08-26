import express from 'express';

const emailValidator = (input: string) => {
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
    input,
  );
};

const userNameValidator = (input: string) => {
  return /^[a-z0-9_-]{3,16}$/.test(input);
};

const passwordValidator = (input: string) => {
  // 조건1. 6~20 영문 대소문자
  // 조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
  // ref: https://hee-kkk.tistory.com/22
  return /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/.test(input);
};

function myValidator(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): void {
  if (
    request.body.email === undefined ||
    request.body.username === undefined ||
    request.body.password_request === undefined
  ) {
    request.body = { result: 'false' };
  } else if (
    emailValidator(request.body.email) &&
    userNameValidator(request.body.username) &&
    passwordValidator(request.body.password_request)
  ) {
    request.body = { result: 'true' };
  } else {
    request.body = { result: 'false' };
  }
  next();
}

export default myValidator;
