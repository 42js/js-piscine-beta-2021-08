const stackCreate = () => ({
  arr: [],
});

const stackEmpty = (stack) => {
  if (!stack) return false;
  else if (stack.arr.length === 0) return false;
  return true;
};
const stackPush = (stack, data) => {
  stack.arr.length += 1;
  stack.arr[stack.arr.length - 1] = data;
};
const stackPeek = (stack) => {
  try {
    if (!stack) throw new Error("stack이 정의되지 않았습니다.");
    if (stack.arr.length === 0) throw new Error("stack이 정의되었으나 arr의 길이가 0입니다.");
    return stack.arr[stack.arr.length - 1];
  } catch (e) {
    console.error(`에러발생${e.message}`);
  }
};
function stackPop(stack) {
  try {
    if (!stack) throw new Error("stack이 정의되지 않았습니다.");
    if (stack.arr.length === 0) throw new Error("stack이 정의되었으나 arr의 길이가 0입니다.");
    const arr = [];
    arr.length = stack.arr.length - 1;
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = stack.arr[i];
    }
    stack.arr = arr;
  } catch (e) {
    console.error(`에러발생${e.message}`);
  }
}
