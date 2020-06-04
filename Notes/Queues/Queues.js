class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let newest = new Node(value);
    this.tail.next = newest;
    this.tail = newest;
  }

  dequeue() {
    let dequeued = this.head;
    this.head = this.head.next;
    return dequeued;
  }

  empty() {
    return this.head === null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}