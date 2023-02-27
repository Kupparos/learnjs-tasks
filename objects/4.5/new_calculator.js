function Calculator() {
  (this.read = () => {
    this.a = +prompt("a");
    this.b = +prompt("b");
  }),
    (this.sum = () => {
      return this.a + this.b;
    }),
    (this.mul = () => {
      return this.a * this.b;
    });
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
