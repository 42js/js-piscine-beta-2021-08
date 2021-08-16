const stackCreate = () => ({
    arr: [],
    len: 0,
});

function stackEmpty(stack) {
    if (stack.len == 0){
        return true;
    }
    else{
        return false;
    }
}

function stackPush(stack, data) {
    stack.arr[stack.len] = data;
    stack.len++;
}

function stackPeek(stack) {
    return stack.arr[stack.len -1];
}

function stackPop(stack) {
    if (stack.len == 0){
        console.log("Stack is Empty!!");
    }
    else{
        stack.len--;
    }
}

let stack = stackCreate();
console.log(stackEmpty(stack));
stackPush(stack, 1231);
console.log(stackEmpty(stack));
stackPush(stack, 12);
console.log(stackPeek(stack));
stackPop(stack);
console.log(stackPeek(stack));