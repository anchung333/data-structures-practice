const binarySearch = (key, array, minIdx, maxIdx) => {
  let min = minIdx || 0;
  let max = maxIdx || ((maxIdx === 0) ? 0 : array.length - 1);
  let midpoint = Math.floor((max - min)/2) + min;
  if (array[midpoint] < key && min !== max) {
    return binarySearch(key, array, midpoint + 1, max);
  } else if (array[midpoint] > key && min !== max) {
    return binarySearch(key, array, min, midpoint - 1);
  } else if (min === max && key !== array[midpoint]) {
    return -1;
  } else {
    return midpoint;
  }
}