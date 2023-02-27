function sumInput() {
  let arr = [];

  while (true) {
    let num = prompt("Введите число");
    if (num === "" || num === null || !isFinite(num)) break;
    arr.push(+num);
  }

  return arr.length ? arr.reduce((prev, cur) => prev + cur) : 0;
}
