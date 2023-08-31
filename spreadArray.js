const number = [1, 3, 3, 5, 6, 78, 4, 55, 9];


const maxNumber = Math.max(...number);
// console.log(maxNumber);

const arr1 = [1,2 ,3 ,4 , 5];
const arr2 = [...arr1];
arr1.push(999);
arr2.push(1000);

// console.log(arr1)
// console.log(arr2);

const numbers = [23, 43, 23, 22, 44, 54, 33];
const [first, second, ...remaining] = numbers;
console.log(first,second);
console.log(remaining)
