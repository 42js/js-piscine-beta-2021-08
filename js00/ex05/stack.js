const stackCreate = () => ({
  arr: []
});

const stackEmpty = stack =>{
	if (stack[0] == undefined)
		return true;
	else
		return false;
}

const stackPush = (stack, data) =>{

	let i = 0;
	while (stack[i] != undefined)
		i++;
	stack[i] = data;
}

const stackPeek = (stack) =>{
	let i = 0;

	if (stackEmpty(stack))
		console.log("Stack is empty.");
	else
	{
		while (stack[i] != undefined)
			i++;
		i--;
		return stack[i];
	}
}

const stackPop = (stack) =>{
	let i = 0;

	if (stackEmpty(stack))
		console.log("Stack is empty.");
	else
	{
		while (stack[i] != undefined)
			i++;
		i--;
		delete stack[i];
	}
}
