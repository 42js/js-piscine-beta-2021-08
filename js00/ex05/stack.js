export const stackCreate = () => ({
  arr: []
});

export const stackEmpty = (stack) => {
  if(stack){
    return true;
  }
  return false;
}

export const stackPush = (stack,data) => {
  stack[stack.length++] = data;
}

export const stackPeek = (stack) => {
  return stack[stack.length-1];
}

export const stackPop = (stack) => {
  if(stack.length === 0){
    console.log("stack is emtpy");
  }else{
    return stack.length--;
  }
}

export let stack = stackCreate().arr;
