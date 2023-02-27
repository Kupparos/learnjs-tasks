function Accumulator(num) {
  this.value = num;
  this.read = () => {
    this.value += +prompt("Число, которое нужно добавить?");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
