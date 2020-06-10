class MyBST {
  constructor() {
    this.root = null;
  }

  insert(value, node) {
    let currentNode = node || this.root;
    let newNode = new Node(value);
    if (currentNode === this.root && this.root === null) {
      this.root = newNode;
      return;
    }
    if (currentNode.value > value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      } else {
        return this.insert(value, currentNode.left);
      }
    } else if (currentNode.value < value) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      } else {
        return this.insert(value, currentNode.right);
      }
    } else {
      return 'VALUE ALREADY IN TREE';
    }
  }

  getNodeCount() {
    let count = 0;
    let traverse = (node) => {
      if (node !== null) {
        count++;
      } else {
        return;
      }
      //traverse right, then traverse left;
      traverse(node.left);
      traverse(node.right);
      return;
    }
    traverse(this.root);
    return count;
  }

  printValues() {
    //inOrderTraversal: print left child, then parent, then right sibling
    //stay on parent node and do null check on children's children...if null then can proceed printing
    let nodes = [];
    let pushInOrder = (currentNode) => {
      if (currentNode.left) {
        pushInOrder(currentNode.left);
      }
      nodes.push(currentNode.value);
      if (currentNode.right) {
        pushInOrder(currentNode.right);
      }
      return;
    }
    pushInOrder(this.root);
    return nodes;
  }

  deleteTree() {
    this.root = null;
  }

  isInTree(value, node) {
    if (node === null) {
      return false;
    }
    let currentNode = node || this.root;
    if (currentNode.value > value) {
      return this.isInTree(value, currentNode.left);
    } else if (currentNode.value < value) {
      return his.isInTree(value, currentNode.right);
    } else {
      return true;
    }
  }

  getHeight() {
    //breadth first search?
    let height = 0;
    let traverseLevels = (nodes) => {
      if (nodes.length === 0) {
        return;
      }
      let toVisit = [];
      height++;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].left !== null) {
          toVisit.push(nodes[i].left);
        }
        if (nodes[i].right !== null) {
          toVisit.push(nodes[i].right);
        }
      }
      return traverseLevels(toVisit);
    }
    traverseLevels([this.root]);
    return height;
  }

  getMin() {
    let currentMin = this.root;
    while (currentMin.left !== null) {
      currentMin = currentMin.left;
    }
    return currentMin.value; 
  }

  getMax() {
    let currentMax = this.root;
    while (currentMax.right !== null) {
      currentMax = currentMax.right;
    }
    return currentMax.value;
  }

  isBST() {
    let isBST = true;
    let traverseDepths = (node) => {
      if (node.left) {
        if (node.left.value < node.value) {
          return traverseDepths(node.left);
        } else {
          isBST = false;
        }
      }
      if (node.right) {
        if (node.right.value > node.value) {
          return traverseDepths(node.right);
        } else {
          isBST = false;
        }
      }
    }
    traverseDepths(this.root);
    return isBST;
  }

  getSuccessor(value) {
    let currentNode = this.root;
    let successor = value;
    while (currentNode.value !== value) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    }
    if (currentNode.right === null) {
      successor = -1;
    } else {
      currentNode = currentNode.right;
      successor = currentNode.value;
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
        successor = currentNode.value;
      }
    }
    return successor;
  }

  deleteValue(value) {
    //traverse to node
    let currentNode = this.traverseTo(value)[0];
    let parent = this.traverseTo(value)[1];
    let side = this.traverseTo(value)[2];
    if (currentNode.left === null && currentNode.right === null) {
      if (side === 'left') {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (currentNode.left && currentNode.right) {
      //find successor, then swap positions with successor and delete the node
      let successorNode = this.traverseTo(this.getSuccessor(value))[0];
      let successorValue= successorNode.value;
      let successorParent = this.traverseTo(this.getSuccessor(value))[1];
      if (successorNode.left === null && successorNode.right === null) {
        successorNode.value = currentNode.value;
        currentNode.value = successorValue;
        successorParent.left = null;
      } else {
        successorNode.value = currentNode.value;
        currentNode.value = successorValue;
        successorParent.right = successorNode.right;
      }
    } else {
      //one child; 'ignore' the node and move the relation from parent to old child's child
      let newChild = currentNode.left || currentNode.right;
      if (side === 'left') {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
    }
  }

  traverseTo(value) {
    let parent = this.root;
    let currentNode = this.root;
    let side = null;
    while (currentNode.value !== value) {
      if (currentNode.value > value) {
        parent = currentNode;
        currentNode = currentNode.left;
        side = 'left';
      }
      if (currentNode.value < value) {
        parent = currentNode;
        currentNode = currentNode.right;
        side = 'right';
      }
    }
    return [currentNode, parent, side];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//  8
// 5 22
//  10 30
//    25 35

// let bst1 = new MyBST();
// bst1.insert(8);
// bst1.insert(22);
// bst1.insert(5);
// bst1.insert(10);
// bst1.insert(30);
// bst1.insert(35);
// bst1.insert(25);
// bst1.deleteValue(22);
// bst1.deleteValue(25);
// console.log(bst1.root.right);