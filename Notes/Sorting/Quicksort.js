let quickSort = (array, start = 0, end = array.length - 1) => {
  return partition(array, start, end);
}

let partition = (array, start, end) => {
  if (end - start < 1) {
    return;
  }
  let pivot = Math.floor((end + start)/2);
  let l = start;
  let h = end;
  console.log(array[pivot]);
  while (l < h) {
    while (array[l] < array[pivot]) {
      l++;
    }
    while (array[h] > array[pivot]) {
      h--;
    }
    //swap
    if (l <= h) {
      let currLow = array[l];
      let currHigh = array[h];
      array[l] = currHigh;
      array[h] = currLow;
      l++;
      h--;
    }
  }
  console.log(array, l, h)
  if (start < h) {
    partition(array, start, h);
  }
  if (l < end) {
    partition(array, l, end);
  }
  return array;
}

console.log(quickSort([4,2,6,1,98,3,9]));
