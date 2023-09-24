// swapping done first approach
let num1 = 6;
let num2 = 8;

// const temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);

// swapping done second approach: Destructuring****

[num1, num2] = [num2, num1];
console.log(num1, num2);