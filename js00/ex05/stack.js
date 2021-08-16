const stackCreate = () => ({arr: []});

const stackEmpty = (stack) => {
    if (stack.arr.length === 0) 
        return true;
    else 
        return false;
    }

const stackPush = (stack, data) => {
    const idx = stack.arr.length;
    stack.arr[idx] = data;
}

const stackPeek = (stack) => {
    if (!stackEmpty(stack)) {
        const idx = stack.arr.length - 1;
        return stack.arr[idx];
    } else {
        throw 'Empty stack';
    }
}

const stackPop = (stack) => {
    if (!stackEmpty(stack)) {
        const idx = stack.arr.length - 1;
        delete stack.arr[idx];
        stack.arr.length -= 1;
    } else {
        throw 'Empty stack';
    }
}

export {
    stackCreate,
    stackEmpty,
    stackPush,
    stackPeek,
    stackPop
};