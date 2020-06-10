## Binary Search Trees
  - sorted arrays + binary search are great, but inserting and deleting are kind of a PITA
  - Each node has up to 2 children; can presume child on the right is larger than the parent, and left is less than parent
  - Inserting: starts much like search and try to get to a leaf and insert accordingly
  - Deleting: find the node, go to its right child, and find the smallest value bigger than the node to delete...then swap. Then you can delete accordingly. successor will always be a leaf or have only 1 child (right child).