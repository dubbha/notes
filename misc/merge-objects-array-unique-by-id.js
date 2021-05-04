// Merge arrays of objects, unique by ID
// Say we want to add some users to exising users array, but avoid duplicates
const existingUsers = [
  { id: 'uid1', name: 'John' },
  { id: 'uid2', name: 'Bill' },
];

const newUsers = [
  { id: 'uid3', name: 'Mary' },
  { id: 'uid1', name: 'John' },
]

const mergedUniqueUsers = Object.values(
  [...existingUsers, ...newUsers].reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {}),
);

console.log(mergedUniqueUsers);
// [
//   { id: 'uid1', name: 'John' },
//   { id: 'uid2', name: 'Bill' },
//   { id: 'uid3', name: 'Mary' },
// ]
