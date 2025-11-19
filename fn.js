/* function hallo() {
  console.log("say hallo");
}
hallo(); */

//the above is function decleration

/* var hallo = function () {
  console.log("say hallo");
};
hallo(); */

//the above is function expression

/* function hallo(value) {
  console.log("my name is " + value);
}
hallo("neha"); */

/* function hallo(value) {
  return "my name is " + value;
}
let v = hallo("neha");
console.log(v); */

//waf to calculate sum of 2 num
/* function sum(a, b) {
  console.log(a + b);
}
sum(3, 4); */

/* function sum(a, b) {
  return a + b;
}
let v = sum(3, 4);
console.log(v); */

//arrow function: helps in hadling this keyword,helps when v have one line output no need of return statement
/* const abc = () => {
  console.log("func");
};
abc(); */

/* const sum = (a, b) => {
  return a + b;
};
let value = sum(5, 10);
console.log(value); */

/* const sum = (a, b) => a + b;
let value = sum(5, 10);
console.log(value); */

/* setTimeout(() => {
  console.log("i have data");
}, 7000); // to get output in delayed manner */

setInterval(() => {
  console.log("i have data");
}, 7000); // prints value for every sec,used for asynchronous data
