class myGraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
    this.discovered = false;
  }

  addNeighbors(neighbors) {
    this.neighbors = neighbors;
  }
}

class myDFSList {
  constructor() {
    this.graph = [];
  }

  DFSRecursion() {
    //DFS: keep hitting nodes and exploring further until all hit an end point; then can loop through other children.
    //loop through children. if that child has children, recursively call
    let print = [];
    let DFSExplore = (node) => {
      print.push(node.value);
      node.discovered = true;
        for (let i = 0; i < node.neighbors.length; i++) {
          if (node.neighbors[i].discovered !== true) {
            if (node.neighbors[i].neighbors.length > 0) {
              DFSExplore(node.neighbors[i]);
            } else {
                print.push(node.neighbors[i].value);
                node.discovered = true;
            }
          }
      }
    }
    for (let i = 0; i < this.graph.length; i++) {
      if (this.graph[i].discovered !== true) {
        DFSExplore(this.graph[i]);
      }
    } 
    console.log(print);
  }

  DFSIterative() {
    let print = [];
    let DFSExplore = (node) => {
      let stack = [];
      stack.push(node);
      while (stack.length !== 0) {
        let top = stack.pop();
        if (top.discovered !== true) {
          print.push(top.value);
          top.discovered = true;
          //to have it read left to right as if on a tree. 
          for (let j = top.neighbors.length - 1; j >= 0; j--) {
            if (top.neighbors[j].discovered !== true) {
              stack.push(top.neighbors[j]);
            }
          }
        }
      }
    }
    for (let i = 0; i < this.graph.length; i++) {
      DFSExplore(this.graph[i]);
    }
    console.log(print);
  }
}

let test1 = new myDFSList();
let one = new myGraphNode(1);
let two = new myGraphNode(2);
let three = new myGraphNode(3);
let four = new myGraphNode(4);
let five = new myGraphNode(5);
let six = new myGraphNode(6);
let seven = new myGraphNode(7);
let eight = new myGraphNode(8);
let nine = new myGraphNode(9);
let ten = new myGraphNode(10);
let eleven = new myGraphNode(11);
let twelve = new myGraphNode(12);
one.addNeighbors([two,seven,eight]);
two.addNeighbors([one,three,six]);
three.addNeighbors([two,four,five]);
four.addNeighbors([three]);
five.addNeighbors([three]);
six.addNeighbors([two]);
seven.addNeighbors([one]);
eight.addNeighbors([one,nine,twelve]);
nine.addNeighbors([eight,ten,eleven]);
ten.addNeighbors([nine]);
eleven.addNeighbors([nine]);
twelve.addNeighbors([eight]);
test1.graph.push(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve);
//test1.DFSIterative();
test1.DFSRecursion();
