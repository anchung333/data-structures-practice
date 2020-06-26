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
      this.graph[y-1][x-1] = 1;
    } else {
      return 'OUT OF BOUNDS';
    }
  }

  BFS(start) {
    //have frontier, and next
    //if come across 1 for a coordinate value, add it to the queue. 
    //at end of row, jummp to the first row up next in the queue, and explore that row. 
    let print = [];
    let frontier = [];
    frontier.push(start);
    while (frontier.length !== 0) {
      let next = [];
      for (let i = 0; i < frontier.length; i++) {
        //print out idx + 1 to account for 0 indexing
        print.push(frontier[i]+1);
        //explore entire row
        let row = frontier[i];
        this.graph[row].forEach((coordinate, column) => {
          if (coordinate === 1) {
            //add the current column as a row to be explored
            next.push(column);
            //mark the edge as seen to avoid looping
            this.graph[row][column] += 1;
            this.graph[column][row] += 1;
          }
        })
      }
      frontier = next;
    }
    return print;
  }
}

let graph1 = new GraphMatrix(5,5);
graph1.addEdge(1,2);
graph1.addEdge(2,3);
graph1.addEdge(1,4);
graph1.addEdge(4,5);
console.log(graph1.BFS(0));