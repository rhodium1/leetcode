/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0, len = nums.length; i < len; i++) {
    const curValue = nums[i];
    const reduce = target - curValue;
    const redueceIndex = map.get(reduce);
    if (redueceIndex !== undefined) {
      return [i, redueceIndex];
    }
    map.set(curValue, i);
  }
};
