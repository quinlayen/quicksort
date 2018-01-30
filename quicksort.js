let arr = [7, 3, 9, 4, 5, 8];

let sort = function(arr) {
  if (arr.length === 0) {
    return [];
  }

  let pivot = arr[0];
  let right = [];
  let left = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(pivot, sort(right));
};

sort(arr);