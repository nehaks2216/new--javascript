/* let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let output = [...array1, ...array2]; // ... is a spread operators which helps to combine or concat 
console.log(output); */

let array1 = { a: 1, b: 2 };
let array2 = { b: 3, c: 4 };
let output = { ...array1, ...array2 };
console.log(output);
