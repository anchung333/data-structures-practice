let mergesort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let midpoint = Math.floor(array.length/2);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  return merge(mergesort(left), mergesort(right));
}

//should take 2 sorted arrays and merge them in order
let merge = (left, right) => {
  let sorted = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      sorted.push(left[leftIdx]);
      leftIdx++;
    } else {
      sorted.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return sorted.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

//divide into left and right halves
//if halves are more than length 1 divide again?
//compare 2 halves: take the smallest, push it to the empty sorted array, then increment index. keep doing until end is reached for both halves; return the sorted array
//merge 2 sorted halves; return the new sorted array

console.log(mergesort([10,2,4,6,71,8,9,0]));