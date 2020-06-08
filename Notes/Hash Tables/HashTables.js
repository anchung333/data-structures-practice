class myHashTable {
  constructor() {
    //start with size limit 8
    this.limit = 8;
    this.table = new Array(this.limit);
  }

  hash(key) {
    //account for strings and numbers
    if (typeof key === 'number') {
      return key % this.limit;
    } else {
      //if multiple words, split into array and first 2 words
      let splitKey = key.split(' ');
      //hash first two words of splitKey and convert them to sums of ASCII values
      let sum = 0;
      for (let i = 0; i < splitKey.length; i++) {
        if (i < 2) {
          for (let j = 0; j < splitKey[i].length; j++) {
            sum += splitKey[i].charCodeAt(j);   
          }
        } else {
          break;
        }
      }
      return sum % this.limit;
    }
  }

  //chaining
  add(key, value) {
    let index = this.hash(key);
    if (this.table[index] === undefined && index < this.limit) {
      let newBucket = new myLinkedList();
      newBucket.head = [key, value];
      this.table[index] = newBucket;
    } else if (this.table[index] !== undefined) {
      currentNode = this.table[index].head;
      while (currentNode !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new myNode([key, value]);
    }
  }

  exists(key) {
    let index = this.hash(key);
    if (this.table[index] === undefined) {
      return false;
    } else {
      let currentNode = this.table[index].head;
      while (currentNode !== null) {
        if (currentNode.value[0] === key) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index] === undefined) {
      return 'DOES NOT EXIST';
    } else {
      let currentNode = this.table[index].head;
      while (currentNode !== null) {
        if (currentNode.value[0] === key) {
          return currentNode.value[1];
        }
        currentNode = currentNode.next;
      }
      return 'DOES NOT EXIST';
    }
  }

  remove(key) {
    let index = this.hash(key);
    if (this.table[index] === undefined) {
      return 'DOES NOT EXIST';
    } else {
      let currentNode = this.table[index].head;
      while (currentNode !== null) {
        if (currentNode.next.value[0] === key) {
          let removed = currentNode.next.value;
          currentNode.next = currentNode.next.next;
          return removed;
        }
        currentNode = currentNode.next;
      }
      return 'DOES NOT EXIST';
    }
  }

  //probing
  addProbe(key, value) {
    let index = this.probe(key);
    this.table[index] = [key, value];
  }

  existsProbe(key) {
    let index = this.probe(key);
    let trial = 1; 
    while (this.table[index] !== undefined) {
      trial++;
      index = this.hash(key*trial);
      if (this.table[index][0] === key) {
        return true;
      }
    }
    return false;
  }

  getProbe(key) {
    let index = this.probe(key);
    let trial = 1; 
    while (this.table[index] !== undefined) {
      trial++;
      index = this.hash(key*trial);
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
    }
    return 'DOES NOT EXIST';
  }

  removeProbe(key) {
    let index = this.probe(key);
    let trial = 1; 
    while (this.table[index] !== undefined) {
      trial++;
      index = this.hash(key*trial);
      if (this.table[index][0] === key) {
        let removed = this.table[index][1];
        this.table[index] = undefined;
        return removed;
      }
    }
    return 'DOES NOT EXIST';
  }

  probe(key) {
    let index = this.hash(key);
    let trial = 1;
    if (this.table[index] === undefined) {
      return [index, trial];
    } else {
      while (this.table[index] !== undefined) {
        if (this.table[index][0] === key) {
          return index;
        }
        trial++;
        index = this.hash(key*trial);
      }
      return index;
    }
  }
}

class myLinkedList {
  constructor() {
    this.head = null;
  }
}

class myNode {
  constuctor(value) {
    this.value = value;
    this.next = null;
  }
}