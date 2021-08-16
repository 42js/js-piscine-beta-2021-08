const stackCreate = () => ({
    arr: [],
});

function stackEmpty(stack) {
    if (stack.arr.length === 0) return true;
    else return false;
}

function stackPush(stack, data) {
    stack.arr[stack.arr.length] = data;
}

function stackPeek(stack) {
    if (stackEmpty(stack)) {
        console.error('stack is empty');
        return;
    } else {
        return stack.arr[stack.arr.length];
    }
}

function stackPop(stack) {
    if (stackEmpty(stack)) {
        console.log('stack is empty');
        return;
    }
    let temp = new Array(stack.arr.length - 1);
    for (let i = 0; i < stack.arr.length - 1; i++) {
        temp[i] = stack.arr[i];
    }
    stack.arr = temp;
}
