// O(3n) ~ O(n)

const validAnagram = (str, str2) => {
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
