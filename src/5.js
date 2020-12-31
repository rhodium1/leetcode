/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //动态规划
  let longest = "";
  const matrix = [];
  for (let i = 0, len = s.length; i < len; i ++) {
    matrix.push(new Array(len));
  }
  for (let l = 0, len = s.length;  l < len; l++) {
    for(let i = 0; i + l < len; i++) {
      let j = i + l;
      let curResult = 0;
      if (l === 0) {
        curResult = 1;
      } else {
        if (s[i] === s[j] && (l === 1 || matrix[i + 1][j - 1])) curResult = 1;
      }
      matrix[i][j] = curResult;
      if (curResult === 1) longest = s.slice(i, j + 1);
    }
  }
  return longest;
};
