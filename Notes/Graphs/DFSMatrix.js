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
    console.log(print);
  }

  DFSIterative() {

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
graph1.DFSRecursive();
// let graph2 = new GraphMatrix(4,4);
// graph2.addEdge(1,2);
// graph2.addEdge(2,1);
// graph2.addEdge(1,3);
// graph2.addEdge(3,1);
// graph2.addEdge(3,4);
// graph2.addEdge(4,3);
// graph2.DFSRecursive();