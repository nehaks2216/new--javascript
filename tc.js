//implicit type conversion and explicit type conversion

//implicit type
/* console.log(10 + "10");

//if not add it will convert to num
console.log(10 * "2");
console.log(10 - "10"); */

//explicit type conversion

/* console.log(Number("123"));
console.log(String(123));
console.log(Boolean("123"));
console.log(Boolean(""));
console.log("3" + true);
console.log(3 + false);
console.log("3" - true);
console.log("3" + true);
console.log((2 == 2) == 2);
console.log(2 == 2);
console.log((((2 == 2) == 2) == 2) == 0); */

// console.log(x);
// let x;

//v get referance error is called temperor dead zone its ntg but calling the variable befor initialization
{
  let array = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0];
  let tree = 1;
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      // console.log(array[i]);
      let pv = i == 0 ? 0 : array[i - 1];
      let nv = i == array.length - 1 ? 0 : array[i + 1];
      if (pv == 0 && nv == 0) {
        array[i] = 1;
        count++;
      }
    }
  }
  console.log(tree == count);
}
