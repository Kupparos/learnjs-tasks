let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListRecursion(list) {
  alert(list.value);
  if (list.next) {
    printListRecursion(list.next);
  }
}

function printListCycle(list) {
  while (list) {
    alert(list.value);
    list = list.next;
  }
}

console.log(printListRecursion(list));
console.log(printListCycle(list));
