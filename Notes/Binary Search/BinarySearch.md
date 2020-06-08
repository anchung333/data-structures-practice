## Binary Search
  - given a sorted list, search will make a binary decision...go left/right, greater/less than, etc and eliminate the half that is the opposite direction of where we want to search next
  - O(log N)
  - keeping the list sorted: 
    - using a BST:
      - sorted traversal: before printing root, have to travel down to the left-most leaf, print that, then print the parent node, then the leaf below + right of it, then go up one tree, continuing until hitting the root. do the same for the right side:
        before printing the node, travel down to the left-most leaf
      - deleting in a BST:
        - if node has 2 children: have to swap node with node of next largest value. next largest value would not have 2 children, so we can go ahead and swap since if it did have 2 children, its left child would be a better candidate for next largest value of the node we want to delete. 
      - cons: what if list happens to already be sorted? nodes would keep just being added to the right, making for a very unbalanced tree.