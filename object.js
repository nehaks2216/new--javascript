//used to store the collective data
//its is a collection of key-value pair

/* let board = {
  name: "white board",
  isavailable: "true",
  write: function () {
    console.log("i am able to write on a board");
  },
} */

/*   let employee = {
  department: "frontend",
  id: "12345",
  name: ["neha", "sneha"],
  doj: "2025-12-12",
  salary: "60000",
};
console.log(employee.name);
console.log(employee);
employee.description = "v all r working here";
console.log(employee); */

/* let array = [1, 2, 3, 4, 5];
let final = 5;
let value = [];
for (i = 0; i < array.length; i++) {
  //   console.log(i);
  for (j = i + 1; j < array.length; j++) {
    // console.log(j);
    if (array[i] + array[j] == final) {
      value.push([i, j]);
    }
  }
}
console.log(value); */

/* let person = {
  name: "neha",
  mail: "abc@gmail.com",
  adress: {
    city: "banglore",
    state: "karnataka",
  },
};
console.log(person.name);
console.log(person.adress);
console.log(person.adress.state); */

/* let person = {
  name: "neha",
  mail: "abc@gmail.com",
  city: "banglore",
};
for (let key in person) {
  //for..in loop
  //   console.log(key);
  console.log(`property ${key}
value ${person[key]}`);
}
 */

/* let a = [1, 2, 3, 4];
for (i = 0; i < a.length; i++) {
  console.log(a[i]);
} */

/* let a = [{}, {}, {}]; //array of objects
for (i = 0; i < a.length; i++) {
  console.log(a[i]);
} */

/* let response = [
  {
    name: "iphone11",
    company: "apple",
  },
  {
    name: "iphone14",
    company: "apple",
  },
  {
    name: "galaxy",
    company: "samsung",
  },
  {
    name: "nord",
    company: "oneplus",
  },
];
let n = [];
for (i = 0; i < response.length; i++) {
  if (response[i].company == "apple") {
    n.push(response[i]);
  }
}
console.log(n); */

/* object methods */

/* let obj = {
  name: "iphone",
  company: "apple",
  price: "12.345$",
};
let obj2 = {
  name: "galaxy",
  model: "17",
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.assign(obj, obj2)); //assigning obj with updation of obj2 */

/* Hoisting: moving decleration or function to the top ,
adventage is it will be available to whole function,
its achieved in function decleration but not in expression*/

/* abc();
function abc() {
  console.log("function");
} */

/* abc();
let abc = function () {
  console.log("function");
}; */
