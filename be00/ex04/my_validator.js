
const emailValidator = (string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string);
}

const userNameValidator = (string) => {
  return /^(?=.{4,20}$)(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(string);
}

const passwordValidator = (string) => {
  return /^(?=.{8,20}$)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!-/:-@\[-`\{-~])([a-zA-Z0-9!-/:-@\[-`\{-~]+)/
    .test(string);
}

const myValidator = (req, res, next) => {
  if (req.body.email === undefined ||
    req.body.username === undefined ||
    req.body.password === undefined) {
    req.body = { 'result' : 'false' };
  } else if (emailValidator(req.body.email) &&
    userNameValidator(req.body.username) &&
    passwordValidator(req.body.password)) {
    req.body = { 'result' : 'true' };
  } else {
    req.body = { 'result' : 'false' };
  }
  next();
}

module.exports = myValidator;