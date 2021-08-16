const stackCreate = () => ({
    arr: []
});

function stackEmpty(stack) {
    if (stack.arr.length == 0)
        return true;
    return false;
}

function stackPush(stack, data) {
    let idx = stack.arr.length;
    stack.arr[idx] = data;
}

function stackPeek(stack) {
    if (stack.arr.length == 0)
        throw Error
    let idx = stack.length;
    return stack.arr[idx - 1];
}

function stackPop(stack) {
    if (stack.arr.length == 0)
        throw Error
    stack.arr[stack.arr.length - 1] = undefined;
}

function stackPrint(stack) {
	console.log("--------stack print--------");
	for (let i = 0; i < stack.arr.length; i++)
		console.log(stack.arr[i]);
}
let test = stackCreate();
stackEmpty(test);
stackPush(test, 42);
stackPush(test, "Seoul");
stackPush(test, "JS");
stackPush(test, "Is Real?");
stackPrint(test);
stackPop(test);
stackPrint(test);