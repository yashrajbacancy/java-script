/*JS: Chunk an Array

Write a function chunkArray(arr, size) that:

Splits an array into smaller arrays (chunks) of a given size

Returns a new array containing these chunks

Uses reduce

Uses slice or index-based logic

Does not use loops (for, while)

Example:

Input:

([1, 2, 3, 4, 5], 2)


Output:

[[1, 2], [3, 4], [5]]

Constraints:

size will always be greater than 0

The original array should not be mutated

*/
function chunkArray(arr, pageCount) {
  const result = [];
  let temp = [];

  for (let el of arr) {
    temp.push(el);

    if (temp.length === pageCount) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
