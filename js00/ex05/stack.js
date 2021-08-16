const stackCreate = () => ({
	arr: []
  });

function stackEmpty(stack) {
	return stack.arr.length === 0;
}

function stackPush(stack, item) {
	stack[stack.arr.length] = item;
}

let test = stackCreate();
stackEmpty(test);
console.log(test);
stackPush(test, 1);
console.log(test);
