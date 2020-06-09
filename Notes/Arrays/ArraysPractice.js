const getSize = (inputArr) => {
  let size = 0;
  let index = 0;
  while (inputArr[index] !== undefined) {
    size++;
    index++;
  }
  return size;
}

//setting array's length to 0, will 'clear' array. Not best solution; use splice(0, arr.length) to actually clear all items
const isEmpty = (array) => {
  if (array.length === 0) {
    return true;
  }
  return false;
}

const getVal = (array, idx) => {
  return array[idx] || 'ERROR! OUT OF BOUNDS';
}

const protoPush = (array, value) => {
  let newArr = array.concat(array, [value]);
  //or newArr = [...array, value];
  return newArr;
}

const protoInsert = (array, index, value) => {
  //could push everything to before, push the value, then push everything after
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < index) {
      newArray[i] = array[i];
    } else if (i === index) {
      newArray[i] = value;
      newArray[i+1] = array[i];
    } else {
      newArray[i+1] = array[i];
    }
  }  
  return newArray;
}

const prepend = (array, value) => {
  //protoInsert(array, 0, value)
  return [value, ...array];
}

const protoPop = (array) => {
  //protoSplice(array, array.length - 1)
  //array.slice(0, array.length)
  let newSize = array.length - 1;
  let popped = array[array.length - 1];
  array.length = newSize;
  return popped;
}

const deleteItem = (array, index) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
}

const removeItem = (array, value) => {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

const findVal = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}