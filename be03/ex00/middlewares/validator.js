const emailValidator = (str) => {
    //이메일 형식
    return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(str);
};

const usernameValidator = (str) => {
    //6글자 이상, 영문 숫자 포함
    const check = /^[a-z0-9]{6,}$/.test(str);
    const num = str.search(/[0-9]/g);
    const eng = str.search(/[a-z]/g);
    const Eng = str.search(/[A-Z]/g);
    if (num >= 0 && eng >= 0 && check && Eng < 0) return true;
    return false;
}

const passwordValidator = (str) => {
    //영문 대소문자, 숫자, 특수문자 포함, 8글자 이상
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(str);
}

module.exports = { emailValidator, usernameValidator, passwordValidator };