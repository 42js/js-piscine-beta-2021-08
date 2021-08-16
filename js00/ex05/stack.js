export const stackCreate = () => ({
    arr: []
});

export function stackEmpty(stack) {
    if (stack.arr.length == 0)
        return true;
    else
        return false;
} 

export function stackPush(stack, data) {
    let index = stack.arr.length;
    stack.arr[index] = data;
}

export function stackPeek(stack) {
    let index = stack.arr.length - 1;
    if (stackEmpty(stack))
    {
        console.log("Emtpy!");
        return ;
    }
    return stack.arr[index];
}

export function stackPop(stack) {
    let index = stack.arr.length - 1;
    let tmp = [];

    if (stackEmpty(stack))
    {
        console.log("Empty!");
        return ;
    }
    for(var i = 0; i < index; i++)
    {
        tmp[i] = stack.arr[i];
    }
    stack.arr = tmp;
}