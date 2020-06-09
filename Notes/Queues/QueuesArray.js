class myQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(value) {
    this.elements.push(value);
  }

  dequeue() {
    return this.elements.shift();
  }

  empty() {
    return this.elements.length === 0;
  }

  full() {
    //don't believe this applies to JS
  }
}

