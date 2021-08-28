import 'dotenv/config';

const jwtObj = { secret: '' };

jwtObj.secret = process.env.JWT_SECRET;

export default jwtObj;
