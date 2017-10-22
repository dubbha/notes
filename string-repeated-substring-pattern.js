/**
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 * Given a non-empty string check if it can be constructed by taking a substring
 * of it and appending multiple copies of the substring together.
 *
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => (s+s).slice(1, -1).indexOf(s) > -1;



/*
https://discuss.leetcode.com/topic/68206/easy-python-solution-with-explaination
*/
