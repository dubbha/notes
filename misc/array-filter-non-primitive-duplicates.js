// Filter object duplicates in an array by unique field
const arr = [
  { id: 'uid1', name: 'John' },
  { id: 'uid2', name: 'Bill' },
  { id: 'uid3', name: 'Mary' },
  { id: 'uid1', name: 'John' },
];

const res = Object.values(arr.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {}));

console.log(res);
// [
//   { id: 'uid1', name: 'John' },
//   { id: 'uid2', name: 'Bill' },
//   { id: 'uid3', name: 'Mary' },
// ]
