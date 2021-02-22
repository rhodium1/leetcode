/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0; let j = height.length - 1;
  let max = 0;
  while(j > i) {
    let nexti = i + 1; 
    let nextj = j;
    let lower = height[i];
    let heighter = height[j];
    if (height[i] > height[j]) {
      nexti = i;
      nextj = j -1;
      lower = height[j];
      heighter = height[i];
    } else if(height[i] === height[j]) {
      nextj = j -1;
    }
    const curArea = lower * (j - i);
    if (curArea > max) max = curArea;
    j = nextj;
    i = nexti;
  }
  return max;
};
