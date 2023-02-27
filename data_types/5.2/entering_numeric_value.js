function readNumber() {
  let number;
  do {
    number = prompt("Введите число");
  } while (!num && num !== null);
  if (number === null || number === "") return null;
  return num;
}
