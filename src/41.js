//要求时间复杂度为 O(n), 常数的空间
//45.38%
//把数字放在其应该在的位置上，第一个不在其相应位置上的就是最小的正整数
var firstMissingPositive = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; i++){
        while(nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]){
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
    let re;
    for(let i = 0; i < len; i++){
        if(nums[i] != i + 1)
            return i + 1;
    }
    return len + 1;
};
firstMissingPositive([1,2,3]);