const stackCreate = () => ({
    arr: []
  });

function stackEmpty(stack)
{
    if (stack.length === 0)
        return true;
    else
        return false;
}

function stackPush(stack, data)
{
    stack[stack.length] = data;
}

function stackPeek(stack)
{
    try
    {
        if (stack.length === 0)
            throw new Error('stack is empty');
        return (stack[stack.length - 1]);
    }
    catch (error)
    {
        console.log(error.message);
    }
}

function stackPop(stack)
{
    try
    {
        if (stack.length === 0)
            throw new Error('stack is empty');
        stack.length = stack.length - 1;
    }
    catch (error)
    {
        console.log(error.message);
    }
}