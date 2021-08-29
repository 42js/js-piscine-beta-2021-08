const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const {ExtractJwt, Strategy: JWTStrategy} = require('passport-jwt');
const bcrypt = require('bcrypt');

const {User} = require('../models');

require('dotenv').config();
const env = process.env;

const passportConfig = {
    usernameField: 'email',
    passwordField: 'password'
};
const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: env.SECRET_KEY
};

const passportVerify = async (username, password, done) => {
    console.log("verify");
    try {
        const user = await User.findOne({
            where: {
                email: username
            }
        });
        if (!user) {
            console.log("1");
            done(null, false, {message: '존재하지 않는 사용자.'});
            return;
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (comparePass) {
            done(null, user);
            return;
        } else {
            done(null, false, {message: '올바르지 않은 비밀번호'});
        }
    } catch (err) {
        console.error(err);
        done(err);
    }
}

const JWTVerify = async(jwtPayload, done) => {
	try {
		const user = await User.findOne({where: {email: jwtPayload.email}});
		if (user) {
			done(null, user);
			return;
		} else {
			done(null, false, {message: '올바르지 않은 토큰입니다.'});
		}
	} catch (err) {
		console.error(err);
		done(err);
	}
}

module.exports = () => {
    passport.use('local', new LocalStrategy(passportConfig, passportVerify));
	passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};