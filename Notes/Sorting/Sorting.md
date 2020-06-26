### Sorting

#### Insertion sort
  - O(n^2) running time
  - start with empty list (S)...S will always be sorted. 
  - for each item in unsorted list i, insert in correct place
  - inserting into S: 
    - using linked list, O(n) worst case for finding position
    - using array, can use binary search, but after finding position and shifting everything over to make room...O(n) worst case.
      - also can be in-place; no need for separate empty list S
      - partition left side to be sorted (S), and remaining is i. 
  - if list is already close to sorted, then correctly implemented sort can take faster than quadratic time
    - correct implementation will walk backwards from S until correct spot is obtained. if list is already sorted, insertion sort will run in O(n) just to verify any elements and not do any insert sorts. 
  
#### Selection Sort
  - O(n^2) running time...always
  - loop through unsorted list, find the smallest item and append to sorted list S, and remove from unsorted list i.
  - can also be done in place:
    - for first, find smallest and swap with first element in array, draw partition after index 0.
    - then do sort for rest of array, shrinking partition for unsorted every time. 
    - can stop when i reaches size 1.

#### Heapsort
  - type of selection sort where unsorted list i is a heap
  - build heap to obey max or min heap property (min heap for in-place), then append the extracted max/min to S. 
  - good for arrays, bad for linked lists. 

#### Mergesort
  - recursive 'divide and conquer' algo
  - levels of recursion: 1 + Math.ceil(log of 2 (n))
  - divide array into 2 halves, sort 2 halves, then merge the sorted halves
  - compare each index for the halves and take smallest one to be the index in the final sorted array
    - whichever is taken, increment index for that half.
    - if equal, take the element from the first half.
    - when exhausted, take only from the remaining half. 
  - need additional auxiliary array to copy over original, then sort by overwriting old array. 
  - however, too complicated for small arrays...use insertion sort for <= 7 items
  - stability: sort by name first, then by a second field...sometimes the name order won't be preserved after second sort...not a stable sort.
    - stable sort preserves order of items with equal keys.
    - stop sort so an equal item never moves past the equal item (insertion sort)
    - merge sort is also stable

#### Bottom-Up Mergesort
  - no recursion
  - take subarrays of size 1, then size 2 sorted arrays, 4, 8, etc

#### Quicksort
  - fastest comparison-based sort for arrays
  - can be O(n^2), but that rarely happens...mostly O(n log n), with smaller constant than mergesort
  - shuffle the array, then divide array at element so that every element before partition is < element, and elements after partition is > than partition.
    - instead of shuffling can just pick random element to be pivot
    - can have pivot be first element
    - 2 pointers start from beginning and end. partition element can be first element.
    - increment i while element @ index i < partition, stop when condition is not satisfied
    - decrement j while element @ index j > partition, " " "
    - when i and j reach each other, do one final check/swap. 
    - j will point to rightmost of all elements that are < than partition...swap j with partition element
  - sort two parts, running the divide method on the 2 halves to sort, stopping when they reach size of 1 for partitions
  - partitioning in place: advantage over mergesort. not worth the cost to make partitioning easier and more stable.
  - same value/key; can go into either partition.
    - or can make 3 lists, and have one list contain the same value as pivot, and concat all at the end
    - this will work well for linked lists, not so well for arrays
  - staying in bounds, and terminating the loop for partitioning can be tricky
  - if items are already sorted, quicksort becomes inefficient - hence the need for a preliminary shuffle
  - in place:
    - choose pivot and swap with last item in array
    - create pointers who are -1 and array.length - 1 (sandwiching the elements we want to sort, excluding pivot which is now array[array.length - 1])

