/* <!-- lexical scope : its is a set of rules written to access the data
-global:
-local:
-nested:
-block:
 --> */

/* //global scoce
let name = "amar";
function outer() {
  console.log(name);
}
outer();
 */

/* let name = "amar";
function outer() {
  console.log(name);
}
console.log(name);
outer(); */

/* //local scope
let name = "amar";
function outer() {
  console.log(name);
  let name2 = "akbar";
  console.log(name2);
}
console.log(name);
outer(); */

/* let name = "amar";
function outer() {
  console.log(name);
  let name2 = "akbar";
  console.log(name2);
}
console.log(name);
console.log(name2);
outer(); */

/* //nested scope
let name = "amar";
function outer() {
  console.log(name);
  let name2 = "akbar";
  console.log(name2);
  function inner() {
    let name3 = "anthony";
    console.log(name3);
  }
  inner();
}
outer(); */

/* let name = "amar";
function outer() {
  //   console.log(name);
  let name2 = "akbar";
  //   console.log(name2);
  function inner() {
    let name3 = "anthony";
    console.log(name);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer(); */

//problem
function possibility(step) {
  if (step <= 2) {
    return step;
  }
  let a = [];
  (a[1] = 1), (a[2] = 2);
  for (i = 3; i <= step; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[step];
}
v = possibility(4);
console.log(v);
