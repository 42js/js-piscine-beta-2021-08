const stackCreate = () => ({
  arr: []
});

const stackEmpty = function (stack) {
  if (stack == undefined)
    throw 'undefined stack!';
  return stack.arr.length == 0
}

const stackPush = function (stack, data) {
  if (stack == undefined)
    throw 'undefined stack!';
  if (data == undefined)
    throw 'undefined data!';
  stack.arr[stack.arr.length] = data;
}

const stackPeek = function (stack) {
  if (stack == undefined)
    throw 'undefined stack!';
  if (stackEmpty(stack)) {
    throw 'No elements!';
  }
  return stack.arr[stack.arr.length - 1];
}

const stackPop = function (stack) {
  if (stack == undefined)
    throw 'undefined stack!';
  if (stackEmpty(stack)) {
    throw 'No elements!';
  }
  stack.arr.length = stack.arr.length - 1;
}

export { stackCreate, stackEmpty, stackPush, stackPeek, stackPop };