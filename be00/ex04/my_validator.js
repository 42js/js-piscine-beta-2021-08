const validator = (req, res, next) => {
    const reqbody = req.body;
    const {email, username, password_request} = reqbody;
    if (!email || !username || !password_request) 
        throw Error('Request Body Error : invalid body props');
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) 
        throw Error('Email Validation Error : email format is wrong');
    if (!/^[a-zA-Z0-9+]{4,12}$/.test(username)) 
        throw Error('UserName Validation Error : email format is wrong');
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password_request)) 
        throw Error('Password Validation Error : email format is wrong');
    next();
}

module.exports = validator;