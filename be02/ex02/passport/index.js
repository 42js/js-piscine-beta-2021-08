require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

function verifyUser(jwt_payload, done) {
    console.log("jwt", jwt_payload);
    return done(null, jwt_payload.use);
}

module.exports = () => {
    passport.use("jwt", new JwtStrategy(opts, verifyUser));
};
