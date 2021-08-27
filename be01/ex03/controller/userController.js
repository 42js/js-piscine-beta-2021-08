const db = require('../models');
const User = db.User;

exports.create = async (req, res) => {
    const reqbody = req.body;
    if (!reqbody.username || !reqbody.email) 
        res
            .status(400)
            .send({"message": "Content is missing."});
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
        res
            .status(200)
            .send(body);
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") 
            res
                .status(400)
                .send({"message": "User already exists."});
        console.error(err.stack);
    }
}

exports.findAll = async (req, res) => {
    try {
        const data = await User.findAll();
        const body = {
            "message": "Users retrieved successfully.",
            data
        };
        res
            .status(200)
            .send(body);
    } catch (err) {
        console.error(err.stack);
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await User.findByPk(id);
		if (data === null)
			res
			.status(400)
			.send({"message": "No users found."});
        const body = {
            "message": "User retrieved successfully.",
            data
        };
        res
            .status(200)
            .send(body);
    } catch (err) {
		console.log(err.stack);
    }
}
