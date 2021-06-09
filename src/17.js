/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  function helper(nums) {
    if(nums.length === 0) return [];
    else if(nums.length === 1) return map[nums[0]];
    const next = helper(nums.slice(1));
    const cur = map[nums[0]];
    return cur.reduce(function(result, curValue) {
      next.forEach(function(val) {
        result.push(curValue + val);
      });
      return result;
    }, []);
    
  }
  return helper(digits);
};

letterCombinations('23');

