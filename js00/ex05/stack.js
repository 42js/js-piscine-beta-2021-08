const stackCreate = () => ({
    arr: []
});

function stackEmpty(stack){
    return stack.arr.length === 0;
}

function stackPush(stack, data){
    const temp = new Array(stack.arr.length + 1);
    for(let i = 0; i < stack.arr.length; i++){
        temp[i] = stack.arr[i];
    }
    temp[stack.arr.length] = data;
    stack.arr = temp;
}

function stackPeek(stack){
    return stack.arr[stack.arr.length - 1];
}

function stackPop(stack){
    const temp = new Array(stack.arr.length - 1);
    for(let i = 0; i < stack.arr.length - 1; i++){
        temp[i] = stack.arr[i];
    }
    stack.arr = temp;
}