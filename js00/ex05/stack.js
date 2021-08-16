const stackCreate = () => ({
	arr: []
});

const st = stackCreate();

const stackEmpty = (stack) => {
	if (stack.arr.length ===  0) 
		return true;
	return false;
};

const stackPush = (stack, data) => {
	stack.arr[stack.arr.length] = data;
} 
const stackPeek = (stack) => {
	if (!(stack.arr[0]))
		throw new Error ("stackPeek error: Empty stack!");
	else
		return (stack.arr[stack.arr.length - 1]);
		
}
const stackPop = (stack) => {
	if (!(stack.arr[0])) throw new Error ("stackPop error: Empty Stack!");
	else {
		let newArr = [];
		for (let i = 0; i < stack.arr.length - 1; i++)
			newArr[i] = stack.arr[i];
		stack.arr = newArr;
	}
}
