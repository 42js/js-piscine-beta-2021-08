
const emailValidator = (str) => {
    //이메일 형식
    return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(str);
};

const usernameValidator = (str) => {
    //6글자 이상, 영문 숫자 포함
    const check = /^[a-zA-Z0-9]{6,}$/.test(str);
    const num = str.search(/[0-9]/g);
    const eng = str.search(/[a-zA-Z]/g);
    if (num >= 0 && eng >= 0 && check) return true;
    return false;
}

const passwordValidator = (str) => {
    //영문 대소문자, 숫자, 특수문자 포함, 8글자 이상
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(str);
}

const myValidator = (req, res) => {
    let body;
    req.on("data", (data) => {
        body = JSON.parse(data);
    });
    req.on("end", () => {
        if (!body.email || !body.username || !body.password_request) {
            res.writeHead(400);
            res.end("error: missing required field");
        }
        else if (emailValidator(body.email) && usernameValidator(body.username) && passwordValidator(body.password_request)) {
            res.writeHead(200);
            res.end(JSON.stringify({"result": "true"}));
        }
        else {
            res.writeHead(400);
            res.end(JSON.stringify({"result": "false"}));
        }
    });
};

module.exports = myValidator;