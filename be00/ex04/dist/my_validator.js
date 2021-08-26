"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailValidator = (input) => {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(input);
};
const userNameValidator = (input) => {
    return /^[a-z0-9_-]{3,16}$/.test(input);
};
const passwordValidator = (input) => {
    // 조건1. 6~20 영문 대소문자
    // 조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
    return /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/.test(input);
};
function myValidator(request, response, next) {
    if (request.body.email === undefined ||
        request.body.username === undefined ||
        request.body.password_request === undefined) {
        request.body = { result: 'false' };
    }
    else if (emailValidator(request.body.email) &&
        userNameValidator(request.body.username) &&
        passwordValidator(request.body.password_request)) {
        request.body = { result: 'true' };
    }
    else {
        request.body = { result: 'false' };
    }
    next();
}
exports.default = myValidator;
