## Heaps / Priority Queue / Binary Heaps
  - Priority Queues: 
    - Just have bag of elements that each have priority key, not as structured visually as a regular queue (no beginning, no end)
    - extracting from this bag involves pulling out element(s) whose priority are maximum
    - Operations: inserting with priority p, extracting element with max priority (removing from the set), and returning the max 
  - Heaps: 
    - array visualized as tree that fulfills heap property: 
      - root of tree is first element (i = 1)
      - max heap: parent will be > child in value 
      - min heap: parent < child in value
    - Binary heap: 
      - one of most common way to implement priority queues
      - binary tree that fulfills heap property either max or min
      -operations:
        - getMax(): just means returning value of root of tree (O(1))
        - inserting(): attach new leaf to any node
          - if inserting at bottom violates heap property, have to sift new value up until heap property is once again satisfied
          - siftup() + insert() = O(tree height)
        - extractMax(): 
          - swap any leaf with the root, and can return max and delete the old root that is now a leaf
          - siftdown() to fix problems with new root: 
            - swap with larger child to automatically solve one problematic edge if 2 edges are in violation of heap property
            - also O(tree height)
        - changePriority(): 
          - change element's value/priority and let it sift up or down
          - O(tree height)
        - Remove(): 
          - change priority to infinity (or something to make sure it sifts up to the root)
          - call siftup() until it hits the root, then simply call extractMax() (which will swap root with leaf and call siftdown)
          - O(tree height)
    - complete binary trees: 
      - complete if all levels are filled except for last level, which must be filled from left to right
      - advantages:
        - lower heights from filled trees means binary heap operations will be faster. with n nodes we can have O(log n) operations
        - can store as array (first element i = 1, not 0):
          - root = first element
          - parent(i): Math.floor(i/2)
          - child(i): 2i, 2i + 1 
      - costs of advantages: 
        - have to keep tree complete/filled. 2 operations modify shape of tree: extractMax() and insert()
        - insert(): insert in leftmost vacant position on last level and let it sift up
        - extractMax(): extract/swap root with last leaf on last level (right-most leaf)
      - additional notes: 
        - elements n/2 + 1 ... n are leaves...they will not need to be sorted. can start heapifying/sifting for elements up until then. 
        - heapifying array: O(n log n)
          - as you work your way up the levels, there may be more operations involved as you may have to continually sift down, but there will be fewer nodes to work with. 
    - Heap sort: 
      - sort using extractMax() in a priority queue that is filled from an unsorted array
      - disadvantage: not in-place...have to store priority queue
        - solution: repair tree bottom up until root is reached
    - constructing heap: 
      - walk backwards from last node that is before the leaf level to root.
      - at each step, bubble down the node to its appropriate spot. 
      - bubble down root
      - O(n) running time