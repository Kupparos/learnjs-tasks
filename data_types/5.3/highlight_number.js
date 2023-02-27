function extractCurrencyValue(str) {
  return +str.slice(1);

  // return +str.match(/\d+/g)
}

alert(extractCurrencyValue("$120") === 120);
