const stackCreate = () => ({
	arr: []
});

export function stackEmpty(stack){
	if (stack[0] === undefined)
		return true;
	return false;
}

export function stackPush(stack, data){
	let index = 0;
	while (stack[index] !== undefined) {
		index++;
	}
	stack[index] = data;
}

export function stackPeek(stack){
	if (stackEmpty(stack) === true)
		return undefined;
	let index = 0;
	while (stack[index] !== undefined) {
		index++;
	}
	return stack[index - 1];
}

export function stackPop(stack){
	if (stackEmpty(stack) === true)
		return console.log('Empty Array!');
	let index = 0;
	while (stack[index] !== undefined) {
		index++;
	}
}

const stack = stackCreate().arr
stackPush(stack, 'a')
stackPush(stack, 'b')
console.log(stackPeek(stack))
console.log(stack);

