const stackCreate = () => ({
    arr: [],
    count: 0,
});

const stackEmpty = (stack) => {
    return (stack.count === 0);
};

const stackPush = (stack, data) => {
    stack.arr[stack.count] = data;
    stack.count++;
};

const stackPeek = (stack) => {
    if (stackEmpty(stack))
        console.log('error');
    else
        return (stack.arr[stack.count - 1]);
};

const stackPop = (stack) => {
    if (stackEmpty(stack))
        console.log('error');
    count--;
}

