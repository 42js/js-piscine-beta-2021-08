const stackCreate = () => ({
    arr: []
});

const stackEmpty = (stack) => {
    var [top, ] = stack.arr;
    if (top === undefined)
        return true;
    return false;
}

const stackPush = (stack, data) => {
    stack.arr = [...stack.arr, data];
}

const stackPeek = (stack) => {
    var [top, ] = stack.arr;
    if (top === undefined)
        throw new Error('stack is empty');
    return top;
}

const stackPop = (stack) => {
    if (stackEmpty(stack))
        throw new Error('stack is empty');
    [, ...stack.arr] = stack.arr;
}

export { stackCreate, stackEmpty, stackPush, stackPeek, stackPop };