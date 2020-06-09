## Stack
  - Operations:
    - add key to collection (push) [O(1)]
    - return most recently-added key (pop) [O(1)]
  - useful for keeping track of order of elements (balanced parentheses/brackets problem - push left parens/brackets into stack as they are found in string, and pop off stack once matched to a right paren/bracket. stack should be empty at end if string is balanced)
  - last in element will be first out (LIFO)
  - stack + linked-list: 'pushing' will simply be updating the head and shoving new node to the front. 'popping' will be getting
    head. 
    - no size limits (problem in other languages when dealing with non-dynamic arrays that have pre-allocated sizes)
    - no wasted space either in terms of allocated space vs actual elements (space used) [again, not a problem in JS]
  - unlike array, not concerned with numerical indices...just the 2 basic operations listed above
  - optional operation: peek() which returns value of top of stack but does not pop it...in JS would have to explictly index it as stack[stack.length - 1]
