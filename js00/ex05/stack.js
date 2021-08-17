export const stackCreate = () => ({
	arr: []
});

export function stackEmpty(stack){
	if (stack['arr'].length === 0)
		return false;
	return true;
}

export function stackPush(stack, data){
	let len = stack['arr'].length;
	stack['arr'][len] = data;
}

export function stackPeek(stack){
	try{
		if (stack['arr'].length === 0)
			throw new Error('stack is Empty!');
		let len = stack['arr'].length;
		return stack['arr'][len - 1];
	}catch(error){
		console.log(error);
	}
}

export function stackPop(stack){
	try{
		if (stack['arr'].length == 0)
			throw new Error('stack is Empty!');
		let arr = [];
		stack['arr'].forEach((e,i) => {
			if (i < stack['arr'].length - 1){
				arr[i] = e;
			}
		})
		stack['arr'] = arr;
	} catch (error){
		console.log(error);
	}
}

const stk = stackCreate();
stackPush(stk, undefined);
console.log(stackPeek(stk));
