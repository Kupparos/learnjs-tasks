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
  if (list.next) {
    printListRecursion(list.next);
  }

  alert(list.value);
}

function printListCycle(list) {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

console.log(printListRecursion(list));
console.log(printListCycle(list));
