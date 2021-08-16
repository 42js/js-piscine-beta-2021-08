const stackCreate = () => ({
  arr: [],
});

function stackEmpty(stack) {
  return stack.arr.length === 0;
}

function stackPush(stack, data) {
  const stackArr = stack.arr;
  if (!stackEmpty(stack) && typeof data !== typeof stackArr[0]) {
    console.log(`It's ${typeof stackArr[0]} stack. Push number value!`);
  } else stackArr[stackArr.length] = data;
}

function stackPeek(stack) {
  const stackArr = stack.arr;
  return stackArr[stackArr.length - 1];
}

function stackPop(stack) {
  const stackArr = stack.arr;
  if (stackEmpty(stack)) throw String('Can\'t pop because stack is empty!');
  stackArr[stackArr.length - 1] = undefined;
  stackArr.length -= 1;
}

// try {
//   const arr1 = stackCreate();
//   console.log(`Check empty: ${stackEmpty(arr1)}`);
//   stackPush(arr1, 10);
//   stackPush(arr1, 20);
//   stackPush(arr1, '3030');
//   console.log(`Check top value: ${stackPeek(arr1)}`);
//   stackPop(arr1);
//   console.log(`Check empty: ${stackEmpty(arr1)}`);
//   stackPop(arr1);
//   console.log(`Check empty: ${stackEmpty(arr1)}`);
//   stackPop(arr1);
// } catch (e) {
//   console.log(e);
// }
