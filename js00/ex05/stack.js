const stackCreate = () => ({
    arr: []
});

const stackEmpty = (stack) => {
    return (stack.arr.length === 0);
};

const stackPush = (stack, data) => {
    stack.arr[stack.arr.length] = data;
};

const stackPeek = (stack) => {
    if (stackEmpty(stack))
        console.error('error');
    else
        return (stack.arr[stack.arr.length - 1]);
};

const stackPop = (stack) => {
    if (stackEmpty(stack))
        console.error('error');
    else
        stack.arr.length--;
}

/* test
const stack = stackCreate();

console.log(stackEmpty(stack));

stackPush(stack, 5);
console.log(stack);
stackPush(stack, 4);
console.log(stack);
stackPush(stack, 3);
console.log(stack);

console.log(stackPeek(stack));
console.log(stack);

stackPop(stack);
console.log(stack);

console.log(stackPeek(stack));
console.log(stack);

console.log(stackEmpty(stack));

stackPop(stack);
stackPop(stack);

console.log(stackEmpty(stack));

stackPeek(stack);
stackPop(stack);
*/