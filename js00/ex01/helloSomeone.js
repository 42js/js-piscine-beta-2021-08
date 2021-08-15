// 기본적으로 package.json 에 type 필드가 없으면 common.js(default) 방식이 적용되어
// 모듈 처리방식이 common.js 의 require 방식이된다. 따라서, ES6 의 import - export를 사용하려면
// 루트 디렉토리에 있는 package.json 파일에 "type": "module"를 추가해야한다.

export default (thing) => {
	if (typeof thing === 'string') {
		if (thing === '')
			return console.log('Who are you?');
		return console.log(`My name is ${thing}`);
	}
	else if (thing === null)
		return console.log('I am null and void');
	else if (typeof thing === 'number') {
		if (thing <= 0)
			return console.log('I am Benjamin Button!');
		else if (isNaN(thing) === true)
			return console.log('Age is just a number');
		return console.log(`My age is ${thing}`);
	}
	else if (thing === undefined)
		return console.log('Nobody can define me!');
}
