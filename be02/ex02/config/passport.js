const passport = require('passport');
const passportJwt = require('passport-jwt');
require('dotenv').config();

const JwtStrategy = passportJwt.Strategy;
const { ExtractJwt } = passportJwt;

const opt = {
  jwtFromRequest: ExtractJwt.fromHeader,
  secretOrKey: process.env.COOKIE_SECRET_KEY,
};

passport.use(new JwtStrategy(opt, (jwtPayload, done) => {
  console.log(jwtPayload);
  if (jwtPayload.username) {
    return done(null, jwtPayload.username);
  }
  return done(true, null, { error: "No 'username'" });
}));
