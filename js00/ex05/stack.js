const stackCreate = () => ({
	arr: []
});

function stackEmpty(stack) {
	if (stack.arr[0])  // arr[0] 가 존재하면 false, is not empty
		return (false);
	return (true);
}

function stackPush(stack, data) {
	var index;
	for (index = 0; stack.arr[index]; ++index) {
		// console.log("push horse goes round " + index);
	}
	// console.log("push index: " + index);
	stack.arr[index] = data;
}

function stackPeek(stack) {
	var index;
	for (index = 0; stack.arr[index]; ++index) {
		// console.log("peek horse goes round " + index);
	}
	return (stack.arr[index - 1]);
}

function stackPop(stack) {
	if (!stack.arr[0])  // 없으면 동작 안함...
		return;
	// arr[0] 를 arr[1] 로 덮어쓴다.
	var index;
	for (index = 1; stack.arr[index]; ++index) {
		// console.log("pop horse goes round " + index);
	}
	stack.arr[index - 1] = undefined;
	// console.log("pop index: " + index);
}

/*
// test
const stack = stackCreate();

// test empty
var is_empty = stackEmpty(stack);
if (is_empty)
	console.log("stack is empty");
else
	console.log("stack is not empty");
// test empty peek
var temp = stackPeek(stack);
console.log("Peek is : " + temp);

// test push
console.log("===push 10===");
stackPush(stack, 10);
// test peek
temp = stackPeek(stack);
console.log("Peek is : " + temp);
// test empty
is_empty = stackEmpty(stack);
if (is_empty)
	console.log("stack is empty");
else
	console.log("stack is not empty");


// test push
console.log("===push 42===");
stackPush(stack, 42);
// test peek
temp = stackPeek(stack);
console.log("Peek is : " + temp);


// test pop
stackPop(stack);
// test peek
temp = stackPeek(stack);
console.log("Peek is : " + temp);
*/
