/*
QUESTION:
Transform the given array so that each tag is a key
and its value is an array of unique ids.
*/

function transformByTags(arr) {
  return arr.reduce((acc, { id, tags }) => {
    tags.forEach(tag => {
      acc[tag] = acc[tag] || [];
      if (!acc[tag].includes(id)) {
        acc[tag].push(id);
      }
    });
    return acc;
  }, {});
}

const input = [
  { id: 3, tags: ["a", "b"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
  { id: 2, tags: ["d", "e"] }
];

console.log(transformByTags(input));
