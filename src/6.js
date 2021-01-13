/**
 * @description 找规律按行找下标
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;
  const arr = [];
  const totalGap = 2 * numRows - 2;
  const len = s.length;
  for(let row = 0; row < numRows; row++) {
    let gap = 2 * row;
    let col = 0;
    let curIndex = row;
    const gaps = [gap, totalGap - gap];
    while(curIndex < len) {
      arr.push(s[curIndex]);
      col++;
      let curGap = gaps[col % 2];
      if (curGap === 0) curGap = totalGap;
      curIndex += curGap;
    }
  }
  return arr.join('');
};
