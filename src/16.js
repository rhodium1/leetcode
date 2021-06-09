/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let minDiff = Infinity;
  let result;
  nums.sort((a, b) => a - b);
  for(let i = 0, len = nums.length; i < len - 2; i++) {
    const a = nums[i];
    let pb = i + 1; let pc = len - 1;
    while(pb < pc) {
      const curValue = a + nums[pb] + nums[pc];
      const diff = Math.abs(target - curValue);
      if(diff === 0) return target;
      if (diff < minDiff) {
        minDiff = diff;
        result = curValue;
      } 
      if (target < curValue) {
        pc--;
      } else {
        pb++
      }
    }
  }
  return result;
};
