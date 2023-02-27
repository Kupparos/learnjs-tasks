let date = new Date(2012, 0, 3); // 3 января 2012 года

function getWeekDay(date) {
  let d = date.getDay();

  switch (d) {
    case 0:
      return "вс";
    case 1:
      return "пн";
    case 2:
      return "вт";
    case 3:
      return "ср";
    case 4:
      return "чт";
    case 5:
      return "пт";
    case 6:
      return "сб";
  }
}

alert(getWeekDay(date));
