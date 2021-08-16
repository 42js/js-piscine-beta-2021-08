const stackCreate = () => ({
	arr: [1,2,3,4]
});

export const stackEmpty = (stack) => {
	if (stack.arr.length ===  0) 
		return true;
	return false;
};

export const stackPush = (stack, data) => {
	stack.arr[stack.arr.length] = data;
}

export const stackPeek = (stack) => {
	if (!(stack.arr[0]))
		throw new Error ("stackPeek error: Empty stack!");
	else
		return (stack.arr[stack.arr.length - 1]);
		
}

export const stackPop = (stack) => {
	if (!(stack.arr[0])) throw new Error ("stackPop error: Empty Stack!");
	else {
		let newArr = [];
		for (let i = 0; i < stack.arr.length - 1; i++)
			newArr[i] = stack.arr[i];
		stack.arr = newArr;
	}
}

// let stk = stackCreate();
// console.log(stk);
// console.log(stackEmpty(stk));
// console.log(stackPeek(stk));
// stackPush(stk, 5);
// console.log(stk);
// stackPop(stk);
// console.log(stk);
