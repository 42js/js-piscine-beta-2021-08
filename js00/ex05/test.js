import { stack, stackEmpty,stackCreate,stackPush,stackPeek,stackPop  } from "./stack.js";

console.log(stackPush(stack, 1));
stackPop(stack);
console.log(stackPop(stack));
console.log(stackEmpty(stack));
