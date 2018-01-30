*Quicksort*

This algorithm will take an array of numbers and sort it in order.  To do this, an index will be chosen.  From that index, all numbers lower than the index will be put into a new array on the left of the index and all numbers higher than the index will be put into a new array on the right of the index.

This will continue until all of the numbers are in order.  If any array has only 1 element, then that array is returned into the final array.

Recursion must be used for this operation to work

1) generate an array
2) create 3 variables:  pivot, left array, right array
3) identify pivot as [0] index.
4) if less than pivot, push into right array.  If greater than pivot, push into right array.
5) use recurssion to run sort function on both left and right arrays until there is only 1 number left on each.
6) must return an array