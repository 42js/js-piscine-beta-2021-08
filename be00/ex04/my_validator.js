function my_validator(req, res, next) {
    const email = req.body.email;
    const username = req.body.username;
    const password_request = req.body.password_request;

    const regEmail = /^[\w]+@[\w.\-]+\.[A-Za-z]{2,3}$/g;
    const regPass =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&\(\)\{\}\[\]:;<>,.?/~_+-=|]).{8,}$/;
    const regName = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    console.log(email, username, password_request);
    if (
        !regEmail.test(email) ||
        !regPass.test(password_request) ||
        !regName.test(username)
    ) {
        console.log("false");
        next({ result: "false" });
    }
    res.status(200).json({ result: "true" });
}

function my_validatorErr(err, req, res, next) {
    res.status(400).json(err);
}
module.exports = { my_validator, my_validatorErr };
