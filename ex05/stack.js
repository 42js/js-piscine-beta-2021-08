const stackCreate = () => ({
		arr: []
});

stackSize = (stack) => {
	if (!stack)
		throw "Wrong";
	let len = 0;
	for (let index in stack)
	{
		if (typeof stack[index] === 'undefined')
			break;
		len++;
	}
	return len;
}

stackEmpty = (stack) => {
	if (!stack)
		throw "Wrong";
	if (stackSize(stack) == 0)
		return true;
	return false;
}

stackPush = (stack, data) => {
	if (!data)
		throw "Wrong";
	stack[stackSize(stack)] = data;
}

stackPeek = (stack) => {
	if (!stack)
		throw "Wrong";
	if (stackEmpty(stack))
		throw "Empty Stack";
	return stack[stackSize(stack) - 1];
}

stackPop = (stack) => {
	if (!stack)
		throw "Wrong";
	if (stackEmpty(stack))
		throw "Empty Stack";
	stack[stackSize(stack) - 1] = undefined;
}

export {stackCreate, stackPop, stackPush, stackPeek, stackEmpty};
