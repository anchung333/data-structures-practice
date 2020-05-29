const pt = (limit) => {
  let triangle = [];
  //loop through row 1 (index 0) -> row limit
  for (let i = 0; i < limit; i++) {
    let row = [];
    //row will always start with one
    row.push(1);
    //fill in and reference above row
    if (i - 1 >= 0) { 
      for (let j = 1; j < triangle[i-1].length; j++) {
        row.push(triangle[i-1][j-1] + triangle[i-1][j]);
      }
      //row will always end with one
      row.push(1);
    }
    triangle.push(row);
  }
  return triangle;
}