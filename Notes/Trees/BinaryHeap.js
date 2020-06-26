class myMaxHeap {
  constructor() {
    //keep index 0 empty to make indexing easier. 
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return (this.heap.length === 0);
  }

  getMax() {
    return this.heap[0];
  }

  siftUp(index) {
    //bubble up element to appropriate spot
    //compare passed in index to its parent, then swap if necessary, then run it again on the node's new spot (its parent's former index)
    let child = this.heap[index];
    let parentIndex = index % 2 === 0 ? (index/2 - 1) : Math.floor(index/2);
    let parent = this.heap[parentIndex];
    if (child > parent) {
      this.heap[index] = parent;
      this.heap[parentIndex] = child;
      return this.siftUp(parentIndex);
    } else {
      return;
    }
  }
  
  insert(value) {
    this.heap.push(value);
    return this.siftUp(this.heap.length - 1);
  }

  siftDown(index, max = this.heap.length - 1) {
    let parent = this.heap[index];
    let childLeft = (this.heap[index*2+1] < max) ? this.heap[index*2+1] : -1;
    let childRight = (this.heap[index*2+2] < max) ? this.heap[index*2+2] : -1;
    if (parent < childLeft && parent < childRight) {
      let maxChild = (childLeft > childRight) ? childLeft : childRight;
      let maxIndex = (childLeft > childRight) ? index*2+1 : index*2+2;
      this.heap[index] = maxChild;
      this.heap[maxIndex] = parent;
      return this.siftDown(maxIndex);      
    } else if (parent < childLeft) {
      this.heap[index] = childLeft;
      this.heap[index*2 + 1] = parent;
      return this.siftDown(index*2 + 1)
    } else if (parent < childRight) {
      this.heap[index] = childRight;
      this.heap[index*2+2] = parent;
      return this.siftDown(index*2+2);
    } else {
      return;
    }
  }

  extractMax() {
    let max = this.heap[0];
    let lastLeaf = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = max;
    this.heap[0] = lastLeaf;
    this.siftDown(0);
    return this.heap.pop();
  }  

  remove(index) {
    let currentNode = this.heap[index];
    let lastLeaf = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = currentNode;
    this.heap[index] = lastLeaf;
    this.siftDown(index);
    this.siftUp(index);
  }

  heapify(array, end = array.length - 1) {
    let lastParentIdx = (end) % 2 === 0 ? (end/2 - 1) : Math.floor((end)/2);
    for (let i = lastParentIdx; i >= 0; i--) {
      this.siftDown(array[i],end);
    }
    return array;
  }

  heapSort(array) {
    this.heap = this.heapify(array);
    for (let i = this.heap.length - 1; i >= 0; i--) {
      let temp = this.heap[0];
      this.heap[0] = this.heap[i];
      this.heap[i] = temp;
      this.heap.heapify(this.heap, i);
    }
    return this.heap;
  }
}