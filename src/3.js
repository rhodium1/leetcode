/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let start = 0;
  let max = 0;
  for(let i = 0, len = s.length; i < len; i++) {
    const curChar = s[i];
    const preIndex = map[curChar];
    if(preIndex >= start) {
      const curLen = i - start;
      if (curLen > max) max = curLen;
      start = preIndex + 1;
    }
    map[curChar] = i;
  }
  const curLen = s.length - start;
  if (curLen > max ) max = curLen;
  return max;
};

lengthOfLongestSubstring("abcabcbb");
