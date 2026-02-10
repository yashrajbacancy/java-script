/*
QUESTION:
Write a function to split an array into chunks of given size.
Do not use loops. Use slice and reduce.
*/

function chunkArray(arr, size) {
  return arr.reduce((acc, _, index) => {
    if (index % size === 0) {
      acc.push(arr.slice(index, index + size));
    }
    return acc;
  }, []);
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
