const stackCreate = () => ({
	arr: []
});

function stackEmpty(stack) {
	if (stack.arr[0])  // arr[0] 가 존재하면 false, is not empty
		return (false);
	return (true);
}

function stackPush(stack, data) {
	var index = 0;
	for (index in stack.arr) {
		// 아무것도 안함... stack 뒤로 달림.
	}
	stack.arr[index] = data;
}

function stackPeek(stack) {
	if (stack.arr[0])
		return (stack.arr);
}

function stackPop(stack) {
	if (!stack.arr[0])  // 없으면 동작 안함...
		return;
	// arr[0] 를 arr[1] 로 덮어쓴다.
	var index = 1;
	for (index in stack.arr)
		stack.arr[index - 1] = stack.arr[index];
}

stack = stackCreate();
var is_empty = stackEmpty(stack);
if (is_empty)
	console.log("stack is empty");
else
	console.log("stack is not empty");
