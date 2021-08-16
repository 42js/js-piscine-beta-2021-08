const stackCreate = () => ({
    arr: []
});

function stackEmpty(stack) {
	if (stack.arr == null || stack !== null)
		return true;
    else
	   return false;
}

function stackPush(stack, data) {
	var len = 0;
	var temp = [];
    while (stack.arr[len])
        len++;
    temp[len] = data;
	len++;
	stack.arr = temp;
}

function stackPeek(stack) {
    var len = 0;
	if (stackEmpty(stack)) {
        console.log("Error: Stack is Empty");
        return null;
    }
	else {
        while (stack.arr[len])
            len++;
        return stack.arr[len - 1];
	}
}

function stackPop(stack) {
	var len = 0;
    if (stackEmpty(stack)) {
        console.log("Error: Stack is Empty");
    }
    else {
        while (stack.arr[len])
            len++;
        stack.arr[len - 1] = null;
        len--;
    }
}
