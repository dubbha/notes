// O(3n) ~ O(n)
const validAnagram = (str, str2) => {
  if (str.length !== str2.length) return false;

  const freqs = charFreqs(str);
  const freqs2 = charFreqs(str2);

  return Object.keys(freqs).every(k => freqs[k] === freqs2[k]);
}

const charFreqs = str => str.split('').reduce((acc, cur) => {
  acc[cur] = acc[cur] ? ++acc[cur] : 1;
  return acc;
}, {});

validAnagram('iceman', 'cinema');    // true
// validAnagram('aaz', 'zza');          // false



// A smarter solution, less concise, but less looping
// O(2n) ~ O(n)
const validAnagram = (str, str2) => {
  if (str.length !== str2.length) return false;

  const freqs = str.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  for (let c of str2) {
    if (!freqs[c]) return false;
    freqs[c] -= 1;
  }
  return true;
}

