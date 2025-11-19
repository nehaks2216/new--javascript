// let array = [1, "pavan"];
// let data = new Array();
// console.log(array);

/* let array = [1, "pavan"];
let data = new Array(1, 2, 3, 4, 5);
console.log(array);
console.log(data);
array.push(6);
console.log(array);
array.pop();
console.log(array); */

/* let color = ["yellow", "red", "violet", "black", "grey"];
console.log(color);
color.push("aqua");
console.log(color);
color.pop();
console.log(color);
color.shift(); //remove the first element
console.log(color);
color.unshift("white"); //adds new element to first
console.log(color);
console.log(color.indexOf("black"));
console.log(color.sort()); //sort in asscending order
console.log(color.sort().reverse()); //gives sorted array in descending order
console.log(color.splice(1, 2));
let c = color.splice(1, 2);
console.log(color);
let v = color.splice(1, 2, "pink", "purple");
console.log(color); */

/* let color = ["yellow"];
let key = ["something"];
let value = [color.concat(key)];
console.log(value); */

let string = "i am attending class in besant";
{
  let s = string.split(" ");
  let final = "";
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    console.log(s[i].length);
    if (s[i] > final.length) {
      final = s[i];
    }
  }
  console.log(final.length);
}
