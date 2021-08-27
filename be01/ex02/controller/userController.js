const db = require('../models');
const User = db.User;

exports.create = async(req, res) => {
    const reqbody = req.body;
    if (!reqbody.username || !reqbody.email) 
        res
            .status(400)
            .send({
                "message": "Content is missing."
            }, null, 2);
    const user = {
        username: reqbody.username,
        email: reqbody.email,
        isCadet: reqbody.isCadet
            ? reqbody.isCadet
            : null,
        careerYears: reqbody.careerYears
            ? reqbody.careerYears
            : null
    };
    try {
        const data = await User.create(user);
        const body = {
            "message": "User added successfully.",
            data
        };
        res.status(200).send(body);
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") 
            res
                .status(400)
                .send({
                    "message": "User already exists."
                }, null, 2);
        console.error(err.stack);
    }
}
