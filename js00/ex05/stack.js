const stackCreate = () => ({
	arr: []
  });

function stackEmpty(stack) {
	if (stack.arr.length === 0)
		return false;
	else
		return true;
}

function stackPush(stack, data) {
	stack.arr.length += 1;
	stack.arr[stack.arr.length - 1] = data;
}

function stackPeek(stack) {
	if (stack.arr.length === 0)
		throw new Error("stack is emtpy");
	return stack.arr[stack.arr.length - 1];
}

function stackPop(stack) {
	if (stack.arr.length === 0)
		throw new Error("stack is emtpy");
	const new_arr = [];
	new_arr.length = stack.arr.length - 1;
	for (let i = 0; i < stack.arr.length - 1; i++)
		new_arr[i] = stack.arr[i];
	stack.arr = new_arr;
}
