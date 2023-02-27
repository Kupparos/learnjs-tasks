let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum = sum + salaries[key];
}

return sum;

// return Object.values(salaries).reduce((prev, cur) => prev+cur)
