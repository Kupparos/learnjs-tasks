let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
   return Object.values(salaries).reduce((a, b) => a + b)
}

alert(sumSalaries(salaries));
