function passRes(req, res, next) {
    res.status(200).json({
        msg: "🍪 jaeskim님 쿠키의 세상에 오신 걸 환영 합니다~! 🍪",
    });
}

module.exports = { passRes };
