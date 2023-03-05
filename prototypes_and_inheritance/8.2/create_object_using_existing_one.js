// Создаем функцию-конструктор
function MyClass(name, age) {
  this.name = name;
  this.age = age;
}

// Создаем экземпляр объекта с помощью функции-конструктора
let obj1 = new MyClass("John", 30);

// Создаем новый объект с помощью уже существующего
let obj2 = new obj1.constructor("Bob", 25);

// Теперь obj2 является новым экземпляром объекта MyClass
console.log(obj2); // выводит { name: "Bob", age: 25 }
