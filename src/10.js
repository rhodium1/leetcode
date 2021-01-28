/**
 * @description 动态规划
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const lens = s.length + 1;
  const lenp = p.length + 1;
  const martrix = new Array(lens);
  function isMatch(i, j) {
    if(i === 0) return false;
    return p[j - 1] === '.' || s[i - 1] === p[j - 1];
  }
  for(let i = 0; i < lens; i++) {
    martrix[i] = new Array(lenp).fill(0);
  }
  martrix[0][0] = 1;
  for (let i = 0; i < lens; i++) {
    for(let j = 0; j < lenp; j++) {
      if (j > 0) {
        if (p[j - 1] === '*') {
          martrix[i][j] = martrix[i][j - 2];
          if(isMatch(i, j -1)) {
            martrix[i][j] |= martrix[i - 1][j];
          }
        } else {
          if(isMatch(i, j)) {
            martrix[i][j] = martrix[i - 1][j - 1];
          }
        }
      }
    }
  }
  return !!martrix[lens - 1][lenp - 1];
};
