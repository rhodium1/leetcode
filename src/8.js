/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let cur = 0;
  let flag = 1;
  let curResult = 0;
  const min = - (2 **31);
  const max = 2 ** 31 - 1;
  const valueMap = {};
  for(let i = 0; i < 10; i ++) {
    valueMap[i] = i;
  }
  for(let i = 0, len = s.length; i < len; i++) {
    const curS = s[i];
    if (i === 0 && curS === '-') {
      flag = -1;
      continue;
    }
    if(i === 0 && curS === "+") continue;
    const curValue = valueMap[curS];
    if (curValue === undefined) {
      return flag * cur;
    } else {
      cur = cur * 10 + curValue;
      curResult = flag * cur;
    }
    if (i >8 ) {
      if (curResult <= min) return min;
      if(curResult >= max) return max;
    } 
  }
  return curResult;
};
myAtoi("42")