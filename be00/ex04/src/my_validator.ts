import express from 'express';

const emailValidator = (input: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};

const userNameValidator = (input: string) => {
  return /^(?=.{4,20}$)(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(input);
};

const passwordValidator = (input: string) => {
  return /^(?=.{8,20}$)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!-/:-@\[-`\{-~])([a-zA-Z0-9!-/:-@\[-`\{-~]+)/.test(
    input,
  );
};

function myValidator(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): void {
  if (
    request.body.email === undefined ||
    request.body.username === undefined ||
    request.body.password === undefined
  ) {
    request.body = { result: 'false' };
  } else if (
    emailValidator(request.body.email) &&
    userNameValidator(request.body.username) &&
    passwordValidator(request.body.password)
  ) {
    request.body = { result: 'true' };
  } else {
    request.body = { result: 'false' };
  }
}

export default myValidator;
