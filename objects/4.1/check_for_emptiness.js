function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;

  // return Object.entries(object).length ? false : true
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
