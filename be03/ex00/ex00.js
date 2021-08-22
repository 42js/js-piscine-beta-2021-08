const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '123123';
let hashpass;


bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    console.log(hash);
	hashpass = hash;

	bcrypt.compare(myPlaintextPassword, hashpass).then(function(result) {
		if (result) console.log("good");
		else console.log("bad");
	});

});