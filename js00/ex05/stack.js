const stackCreate = () => ({
    arr: []
});

function stackEmpty(stack) {
	var ans = false;
	var len = 0;
	if (stack.arr != null)
		while (stack.arr[len])
			len++;
	if (len == 0)
		ans = true;
	return ans;
}

function stackPush(stack, data) {
	var len = 0;
	var array = [];
	if (!stackEmpty(stack))
		while (stack.arr[len])
			len++;
	for (var i = 1; i < len + 1; i++)
		array[i] = stack.arr[i - 1];
	array[0] = data;
	stack.arr = array;
}

function stackPeek(stack) {
	if (!stackEmpty(stack))
		return stack.arr[0];
	else {
		console.warn("Error: Empty stack");
		return null;
	}
}

function stackPop(stack) {
	var len = 0;
	var array = [];
	if (!stackEmpty(stack))
		while (stack.arr[len])
			len++;
	if (len != 0) {
		for (var i = 0; i < len - 1; i++)
			array[i] = stack.arr[i + 1];
		stack.arr = array;
	}
	else
		console.warn("Error: Empty stack");
}


let stack = stackCreate;

stackPop(stack);
console.log("Empty?: ", stackEmpty(stack));

stackPush(stack, 1);
stackPush(stack, 2);
stackPush(stack, 3);
console.log("Push: ", stack.arr);
console.log("Empty?: ", stackEmpty(stack));
console.log("Peek: ", stackPeek(stack));

stackPop(stack);
console.log("Pop: ", stack.arr);
console.log("Empty?: ", stackEmpty(stack));
console.log("Peek: ", stackPeek(stack));

stackPop(stack);
console.log("Pop: ", stack.arr);

stackPop(stack);
console.log("Pop: ", stack.arr);

console.log("Empty?: ", stackEmpty(stack));