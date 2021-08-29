require("dotenv").config();

const passport = require("passport");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");

const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const LocalStrategy = require("passport-local").Strategy;
const { Users } = require("../models");
const secret = process.env.JWT_SECRET_KEY;

const localStrategyOpt = {
    usernameField: "email",
    passwordField: "password",
};

async function localVerify(email, password, done) {
    let user;
    try {
        user = await Users.findOne({ where: { email } });
        if (!user) return done(null, false);
        const isSamePassword = await bcrypt.compare(password, user.password);
        if (!isSamePassword) return done(null, false);
    } catch (error) {
        done(error);
    }
    return done(null, user);
}

const jwtStrategyOpt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
};

async function jwtVerify(payload, done) {
    let user;
    try {
        user = await Users.findOne({ where: { email: payload.email } });
        if (!user) done(null, false);
    } catch (error) {
        done(error);
    }
    return done(null, user);
}

module.exports = () => {
    passport.use(new LocalStrategy(localStrategyOpt, localVerify));
    passport.use(new JWTStrategy(jwtStrategyOpt, jwtVerify));
};
