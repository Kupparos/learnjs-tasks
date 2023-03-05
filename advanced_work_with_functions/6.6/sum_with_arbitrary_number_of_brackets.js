function sum(num) {
  let total = num || 0;
  function addNext(num) {
    if (num === undefined) {
      return total;
    } else {
      total += num;
      return addNext;
    }
  }
  addNext.toString = () => total;
  return addNext;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(1)(2)(3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));
