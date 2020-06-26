class GraphMatrix {
  constructor(x, y) {
    this.graph = [];
    for (let i = 0; i < x; i++) {
      this.graph[i] = [];
      for (let j = 0; j < y; j++) {
        this.graph[i][j] = 0;
      }
    }
  }

  addEdge(x,y) {
    if (x <= this.graph.length && y <= this.graph[x-1].length) {
      this.graph[x-1][y-1] = 1;
    } else {
      return 'OUT OF BOUNDS';
    }
  }

  DFSRecursive() {
    let print = [];
    let traverse = (x) => {
      print.push(x+1);
      for (let y = 0; y < this.graph[x].length; y++) {
        if (this.graph[x][y] < 2) {
          if (this.graph[x][y] === 1) {
            this.graph[y][x] += 2;
            traverse(y);
          }
          this.graph[x][y] += 2;
        }
      }
    }
    traverse(0);
    return print;
  }

  DFSIterative() {
    let print = [];
    let traverse = (x) => {
      let stack = [];
      stack.push([x,x]);
      //has to be while loop here that has as long as stack !== empty
      while (stack.length !== 0) {
        let top = stack.pop();
        let x = top[0];
        let y = top[1];
        print.push(x+1);
        if (this.graph[x][y] < 2) {
          if (this.graph[x][y] === 1) {
            this.graph[y][x] += 2;
            stack.push([y,x]);
          }
          this.graph[x][y] += 2;
        }
      }
    }
    for (let i = 0; i < this.graph.length; i++) {
      traverse(i);
    }
    return print;
  }
}

let graph1 = new GraphMatrix(6,6);
graph1.addEdge(1,2);
graph1.addEdge(2,1);
graph1.addEdge(2,3);
graph1.addEdge(3,2);
graph1.addEdge(3,4);
graph1.addEdge(4,3);
graph1.addEdge(1,5);
graph1.addEdge(5,1);
graph1.addEdge(5,6);
graph1.addEdge(6,5);
//console.log(graph1.DFSRecursive());
console.log(graph1.DFSIterative());
// let graph2 = new GraphMatrix(4,4);
// graph2.addEdge(1,2);
// graph2.addEdge(2,1);
// graph2.addEdge(1,3);
// graph2.addEdge(3,1);
// graph2.addEdge(3,4);
// graph2.addEdge(4,3);
// console.log(graph2.DFSIterative());