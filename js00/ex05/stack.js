const stackCreate = () => ({
	arr: []
});

function stackEmpty(stack) {
	return stack.arr.length === 0;
}

function stackPush(stack, data) {
	const tmp = new Array(stack.arr.length + 1);
	for (let i = 0; i < stack.arr.length; i++)
		tmp[i] = stack.arr[i];
	tmp[stack.arr.length] = data;
	stack.arr = tmp;
}

function stackPeek(stack) {
	if (stack.arr.length === 0)
		return null;
	return stack.arr[stack.arr.length - 1];
}

function stackPop(stack) {
	if (stack.arr.length === 0)
		throw Error;
	const tmp = new Array(stack.arr.length - 1);
	for (let i = 0; i < stack.arr.length - 1; i++)
		tmp[i] = stack.arr[i];
	stack.arr = tmp;
}

function stackPrint(stack) {
	console.log("--------stack print--------");
	for (let i = 0; i < stack.arr.length; i++)
		console.log(stack.arr[i]);
}

let test = stackCreate();
stackEmpty(test);
// stackPop(test);
stackPush(test, 42);
stackPush(test, "Seoul");
stackPush(test, "JS");
stackPush(test, "Is Real?");
stackPrint(test);
stackPop(test);
stackPrint(test);
