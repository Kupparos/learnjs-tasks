function getMaxSubSum(arr) {
  let sum = 0;
  let partSum = 0;

  arr.forEach((item) => {
    partSum += item;
    sum = Math.max(sum, partSum);
    if (partSum < 0) partSum = 0;
  });
  return sum;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, -1, -2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
