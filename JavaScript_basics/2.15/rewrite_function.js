function checkAge1(age) {
  age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  age > 18 || confirm("Родители разрешили?");
}
