const stackCreate = () => ({
	arr: []
});

export function stackEmpty(stack){
	if (stack.arr.length === 0)
		return true;
	return false;
}

export function stackPush(stack, data){
	const length = stack.arr.length;
	stack.arr[length] = data;
}

export function stackPeek(stack){
	if (stackEmpty(stack) === true)
		return undefined;
	const length = stack.arr.length;
	return stack.arr[length - 1];
}

export function stackPop(stack){
	if (stackEmpty(stack) === true)
		return console.log('Empty Array!');
	const length = stack.arr.length;
	stack.arr.length = length - 1
}
