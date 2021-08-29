const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        return next();
    }
    catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(419).json({
                message: "토큰이 만료되었습니다. "
            });
        }
        return res.status(401).json({
            message: "유효하지 않은 토큰입니다. "
        });
    }
};

module.exports = verifyToken;