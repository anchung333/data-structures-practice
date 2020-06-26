class myBFSList {
  constructor() {
    this.graph = [];
  }

  addNode(node) {
    this.graph.push(node);
  }

  BFS(start) {
    //go level by level
    //have 'frontier' queue for current level
    //have next queue for children
    let level = 0;
    let print = [];
    let frontier = [start];
    while (frontier.length !== 0) {
      let next = [];
      for (let i = 0; i < frontier.length; i++) {
        frontier[i].level = level;
        print.push(frontier[i].value);
        if (frontier[i].neighbors.length > 0) {
          frontier[i].neighbors.forEach(neighbor => {
            if (neighbor.level === null) {
              next.push(neighbor);
            }
          })
        }
      }
      level++;
      frontier = next;
    }
    return print;
  }
}

class myGraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
    this.level = null;
  }

  addEdge(y) {
    if (this.neighbors.indexOf(y) === -1 && y.neighbors.indexOf(this) === -1) {
      this.neighbors.push(y);
      y.neighbors.push(this);
    }
  }
}

let test1 = new myBFSList();
let one = new myGraphNode(1);
let two = new myGraphNode(2);
let three = new myGraphNode(3);
let four = new myGraphNode(4);
one.addEdge(two);
one.addEdge(three);
two.addEdge(four);
test1.addNode(one);
test1.addNode(two);
test1.addNode(three);
test1.addNode(four);
console.log(test1.BFS(test1.graph[0]));
