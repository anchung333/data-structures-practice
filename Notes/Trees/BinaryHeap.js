class myMaxHeap {
  constructor() {
    //keep index 0 empty to make indexing easier. 
    this.heap = [null];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return (this.heap.length === 1 && this.heap[0] === null);
  }

  getMax() {
    return this.heap[1];
  }

  siftUp(index) {
    //bubble up element to appropriate spot
    //compare passed in index to its parent, then swap if necessary, then run it again on the node's new spot (its parent's former index)
    let child = this.heap[index];
    let parent = this.heap[Math.floor(index/2)];
    if (child > parent) {
      this.heap[index] = parent;
      this.heap[Math.floor(index/2)] = child;
      return this.siftUp(Math.floor(index/2));
    } else {
      return;
    }
  }
  
  insert(value) {
    this.heap.push(value);
    return this.siftUp(this.heap.length - 1);
  }

  siftDown(index) {
    let parent = this.heap[index];
    let childLeft = this.heap[index*2] || -1;
    let childRight = this.heap[index*2+1] || -1;
    if (parent < childLeft && parent < childRight) {
      let maxChild = (childLeft > childRight) ? childLeft : childRight;
      let maxIndex = (childLeft > childRight) ? index*2 : index*2+1;
      this.heap[index] = maxChild;
      this.heap[maxIndex] = parent;
      return this.siftDown(maxIndex);      
    } else if (parent < childLeft) {
      this.heap[index] = childLeft;
      this.heap[index*2] = parent;
      return this.siftDown(index*2)
    } else if (parent < childRight) {
      this.heap[index] = childRight;
      this.heap[index*2+1] = parent;
      return this.siftDown(index*2+1);
    } else {
      return;
    }
  }

  extractMax() {
    let max = this.heap[1];
    let lastLeaf = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = max;
    this.heap[1] = lastLeaf;
    this.siftDown(1);
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

  heapify(array) {
    array.unshift(null);
    this.heap = array;
    return this.heap;
  }

  heapSort() {
    //have to calculate the last node before the leaf level
    //take last leaf, then get parent (Math.floor(i/2))
    //then work backwards, and siftdown each until root is achieved
    let lastParent = Math.floor((this.heap.length - 1)/2);
    for (let i = lastParent; i >= 1; i--) {
      this.siftDown(this.heap[i]);
    }
    return this.heap;
  }
}