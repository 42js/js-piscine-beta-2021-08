const stackCreate = () => ({
  arr: [],
});

function stackEmpty(stack) {
  if (
    stack === undefined ||
    stack === null ||
    !(typeof stack === 'object' && stack.arr.constructor === Array)
  )
    throw new Error('Error (stackEmpty): invalid parameter given');
  return stack.arr.length === 0;
}

function stackPush(stack, data) {
  if (
    stack === undefined ||
    stack === null ||
    !(typeof stack === 'object' && stack.arr.constructor === Array)
  )
    throw new Error('Error (stackPush): invalid parameter given (first)');
  else if (data === undefined || data === null)
    throw new Error('Error (stackPush): invalid parameter given (second)');
  let temp = [];
  temp = stack.arr;
  temp.length = stack.arr.length + 1;
  temp[temp.length - 1] = data;
  stack.arr = temp;
}

function stackPeek(stack) {
  if (
    stack === undefined ||
    stack === null ||
    !(typeof stack === 'object' && stack.arr.constructor === Array)
  )
    throw new Error('Error (stackPeek): invalid parameter given');
  else if (stack.arr.length === 0)
    throw new Error('Error (stackPeek): Stack is empty');
  return stack.arr[stack.arr.length - 1];
}

function stackPop(stack) {
  if (
    stack === undefined ||
    stack === null ||
    !(typeof stack === 'object' && stack.arr.constructor === Array)
  )
    throw new Error('Error (stackPop): invalid parameter given');
  if (stack.arr.length === 0)
    throw new Error('Error (stackPop): Stack is empty');
  let temp = [];
  temp = stack.arr;
  temp[temp.length - 1] = undefined;
  temp.length -= 1;
  stack.arr = temp;
}

// const stackCheck = stackCreate();

// if (stackEmpty(stackCheck)) console.log('stack empty');
// else console.log('stack not empty');

// stackPush(stackCheck, 2);
// stackPush(stackCheck, 100);
// stackPush(stackCheck, 83);

// console.log(stackPeek(stackCheck));
// stackPop(stackCheck);
// console.log(stackPeek(stackCheck));
// stackPop(stackCheck);
// stackPop(stackCheck);
// // stackPop(stackCheck);

// stackPush(stackCheck, 'adsfadsf');

// console.log(stackPeek(stackCheck));
// if (stackEmpty('aaa')) console.log('stack empty');
// else console.log('stack not empty');

// console.log(stackPeek(ddd));
