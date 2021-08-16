const stackCreate = () => ({
  arr: [],
});

export function stackEmpty(stack) {
  if (stack === null || typeof stack !== 'object' || !(stack.arr instanceof Array)) throw String('Invalid stack!');
  return stack.arr.length === 0;
}

export function stackPush(stack, data) {
  if (stack === null || typeof stack !== 'object' || !(stack.arr instanceof Array)) throw String('Invalid stack!');
  if (data === undefined) throw String('Push data is undefined!');
  if (data === null) throw String('Push data is null!');
  const stackArr = stack.arr;
  stackArr[stackArr.length] = data;
}

export function stackPeek(stack) {
  if (stack === null || typeof stack !== 'object' || !(stack.arr instanceof Array)) throw String('Invalid stack!');
  const stackArr = stack.arr;
  return stackArr[stackArr.length - 1];
}

export function stackPop(stack) {
  if (stack === null || typeof stack !== 'object' || !(stack.arr instanceof Array)) throw String('Invalid stack!');
  if (stackEmpty(stack)) throw String('Can\'t pop because stack is empty!');
  const stackArr = stack.arr;
  stackArr[stackArr.length - 1] = undefined;
  stackArr.length -= 1;
}

try {
  const stack1 = stackCreate();
  console.log(`Check empty: ${stackEmpty(stack1)}`);
  stackPush(stack1, 10);
  stackPush(stack1, 20);
  stackPush(stack1, '3030');
  console.log(`Check top value: ${stackPeek(stack1)}`);
  stackPop(stack1);
  console.log(`Check empty: ${stackEmpty(stack1)}`);
  stackPop(stack1);
  console.log(`Check empty: ${stackEmpty(stack1)}`);
  stackPop(stack1);

  const stack2 = null;
  stackPush(stack2);

  const stack3 = undefined;
  stackPush(stack3);
} catch (e) {
  console.log(e);
}
