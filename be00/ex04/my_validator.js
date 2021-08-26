module.exports = (req, res, next) => {
    if (!req.body.email || !req.body.username || !req.body.password)
        console.log('??')
    next();
}