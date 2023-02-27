let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  return arr.reduce((prev, cur) => prev.age + cur.age, 0) / arr.length;
}

alert(getAverageAge(arr));
