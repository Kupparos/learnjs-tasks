function Calculator() {
  this.calculate = (str) => {
    let expression = str.split(" "),
      a = +expression[0],
      operator = expression[1],
      b = +expression[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  };
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);
