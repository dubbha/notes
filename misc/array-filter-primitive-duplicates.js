// Filter primitive duplicates in an array
const arr = [1, 2, 3, 4, 3, 1, 9];

const res = [...new Set(arr)];

console.log(res); // [1, 2, 3, 4, 9]
