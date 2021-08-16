const stackCreate = () => ({
	arr: []
});

function stacklength(stack) {
	var len = 0;
	if (stack.arr == null)
		return 0;
	while (stack.arr[len])
		len++;
	return len;
};

function stackEmpty(stack) {
	if (stacklength(stack) == 0)
		return true;
	else
		return false;
};

function stackPush(stack, data) {
	if (!stackEmpty(stack)) {
		for (var i = stacklength(stack) - 1; i > -1; i--)
			stack.arr[i + 1] = stack.arr[i];
		stack.arr[0] = data;
	} else {
		var array = [];
		array[0] = data;
		stack.arr = array;
	}
};

function stackPeek(stack) {
	if (stack.arr != null)	
		return (stack.arr[0]);
	else
		console.log("Peek error : stack is empty!");
};

function stackPop(stack) {
	if (!stackEmpty(stack)) {
		for (var i = 0; i < stacklength(stack); i++)
			stack.arr[i] = stack.arr[i + 1];
	}
	else
		console.log("Pop error : stack is empty!");
};

console.log("======Test======");
let test = stackCreate;

console.log("---when empty---");
stackPop(test);
console.log("Empty : " + stackEmpty(test));
console.log("Peek : " + stackPeek(test));

console.log("---Push 1, 2, 3---");
stackPush(test, 1);
stackPush(test, 2);
stackPush(test, 3);
console.log("After pushing : ", test.arr);
console.log("Empty : " + stackEmpty(test));
console.log("Peek : " + stackPeek(test));

console.log("---P o p---");
stackPop(test);
console.log("After poping : ", test.arr);
console.log("Empty : " + stackEmpty(test));
console.log("Peek : " + stackPeek(test));

console.log("---P o p---");
stackPop(test);
console.log("After poping : ", test.arr);
console.log("Empty : " + stackEmpty(test));
console.log("Peek : " + stackPeek(test));

console.log("---P o p---");
stackPop(test);
console.log("After poping : ", test.arr);
console.log("Empty : " + stackEmpty(test));
console.log("Peek : " + stackPeek(test));
