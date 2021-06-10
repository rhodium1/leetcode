/**
 * @description 递归解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums = nums.sort((a,b) => a - b);
  function helper(start, end, target, len) {
    if(len === 1) {
      for(let i = start; i < end; i++) {
        if(nums[i] === target) return [[nums[i]]];
      }
      return []
    } 
    let result = [];
    while(end - start >= len) {
      const cur = nums[start];
      const nextResult = helper(start + 1, end, target - cur, len - 1);
      nextResult.forEach(
        item => {
          result.push([cur, ...item])
        }
      );
      while(nums[++start] === cur){}
    }
    return result;
  }
  return helper(0, nums.length, target, 4);
};

