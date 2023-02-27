function getLastDayOfMonth(year, month) {
  let d = new Date(year, month + 1, 0);
  return d.getDate();
}

alert(getLastDayOfMonth(2012, 1));
