export const stackCreate = () => ({
	arr: []
});

export function stackEmpty(stack)
{
	if (stack.arr.length == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

export function stackPush(stack, data)
{
	len = stack.arr.length;
	temp_arr = new Array(len + 1);
	var i;
	for (i = 0; i < len; i++)
	{
		temp_arr[i] = stack.arr[i];
	}
	temp_arr[len] = data;
	stack.arr = temp_arr;
}

export function stackPeek(stack)
{
	if (stackEmpty(stack))
	{
		console.log("Stack is empty.");
	}
	else
	{
		return stack.arr[stack.arr.length - 1];
	}
}

export function stackPop(stack)
{
	if (stackEmpty(stack))
	{
		console.log("Stack is empty.");
	}
	else
	{
		len = stack.arr.length;
		if (len < 2)
		{
			stack.arr = []
		}
		else
		{
			temp_arr = new Array(len - 1);
			var i;
			for (i = 0; i < len - 1; i++)
			{
				temp_arr[i] = stack.arr[i];
			}
			stack.arr = temp_arr;
		}
	}
}