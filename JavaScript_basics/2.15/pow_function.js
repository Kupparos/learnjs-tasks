let x = +prompt("x");
let n = +prompt("n");

if (n < 1) {
  alert(`Степень ${n} не натуральное число`);
} else {
  alert( pow(x, n) );
}

function pow(x,n) {
   return x**n

   // return Math.pow(x,n)
}

pow(3, 2) // 9
pow(3, 3) // 27
pow(1, 100) // 1