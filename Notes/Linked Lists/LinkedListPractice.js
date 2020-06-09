class myLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let currentNode = this.head;
    let size = 0;
    while (currentNode.next !== null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  isEmpty() {
    return this.head === null;
  }

  valueAt(index) {
    //retrieve value at specified index...could possibly have an index pointer for each node, but will implement just looping through
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (index === count) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
        count++;
      }
    }
    return -1; //return -1 if reaching the end and index is not matched
  }

  //helper method to traverse list and return node at specified index
  nodeAt(index) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (index === count) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
        count++;
      }
    }
    return null;
  }

  //AKA unshift
  pushFront(value) {
    //update head with a new node that has the passed in value
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }
  
  //AKA shift
  popFront() {
    let returnVal = this.head.value;
    this.head = this.head.next;
    return returnVal;
  }

  pushBack(value) {
    //to implement if not using a tail pointer
    //could use list.valueAt(list.size()) to make things looks simpler but that would be O(N^2)
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    //now we've reached the tail; assign new tail and have old tail point to new tail
    let newTail = new Node(value);
    currentNode.next = newTail;
  }

  pushBackTail(value) {
    let oldTail = this.tail;
    let newTail = new Node(value);
    oldTail.next = newTail;
    this.tail = newTail;
  }

  pop() {
    let currentNode = this.head;
    let oldTail = null;
    //look ahead by 2 to find second to last node
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    //currentNode should be 2nd to last node; simply reassign next to null to get rid of tail
    oldTail = currentNode.next;
    currentNode.next = null;
    //if using tail pointer
    //this.tail = currentNode;
    return oldTail.value;
  }

  front() {
    return this.head.value;
  }

  back() {
    //if using tail pointer
    //return this.tail.value;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  //inserting BEFORE the current node located at passed-in index
  insert(index, value) {
    let nodeBefore = this.nodeAt(index - 1);
    let insertNode = new Node(value);
    insertNode.next = nodeBefore.next;
    nodeBefore.next = insertNode;
    if (target === null) {
      return 'OUT OF BOUNDS';
    }
  }

  erase(index) {
    let nodeBefore = this.nodeAt(index - 1);
    nodeBefore.next = nodeBefore.next.next;
  }

  //return nth node from end
  valueNFromEnd(n) {
    let targetIndex = this.size() - 1 - n;
    return this.nodeAt(targetIndex).value;
  }

  reverse() {
    //store references to current, prev, and next
    // 1 -> 2 -> 3 -> 4 -> 5
    // 2 -> 1 -> 3 -> 4 -> 5
    //swap first 2
    let second = this.head.next;
    this.head.next = this.head.next.next;
    second.next = this.head;
    this.head = second;
    let current = this.head.next;
    while (current.next !== null) {
      let prev = this.head;
      let twoAhead = current.next.next;
      current.next.next = prev;
      this.head = current.next;
      current.next = twoAhead;
    }
  }

  removeValue(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
    return 'VALUE NOT FOUND';
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

