// O(3n) ~ O(n), much better than O(n^2) we could end up with with nested loops

const same = (numsArr, squaresArr) => {
  if (numsArr.length !== squaresArr.length) return false;

  const numsFreq = numsArr.reduce((acc, cur) => {   // O(n)
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  const squaresFreq = squaresArr.reduce((acc, cur) => {   // O(n)
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  const numsKeys = Object.keys(numsFreq);

  if (numsKeys.some(key => !squaresFreq[key ** 2] || squaresFreq[key ** 2] != numsFreq[key])) return false;   // O(n)

  return true;
}

same([1,3], [1, 9]);            // true
// same([3,1], [1, 9]);         // true
// same([1,2,3,2], [4,1,9,4]);  // true
// same([1,2,3,2], [4,1,9]);    // false
// same([1,2,3,2], [4,1,9,9]);  // false

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/9816152
*/
