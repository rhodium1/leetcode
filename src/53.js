//最大子序和
//O(n)复杂度，78.24%
var maxSubArray = function(nums) {
    let sum = 0, len = nums.length, max = nums[0];
    for(let i = 0; i < len; i++){
        sum += nums[i];
        if(sum > max)
            max = sum;
        if(sum < 0)
            sum = 0;      

    }
    return max;
};
//分治法
//67.30%
var maxSubArray = function(nums){
    let len = nums.length;
    function solve(i, j){
        if(i === j)
            return nums[i];
        let mid = ~~((i + j) / 2);
        let leftsum = solve(i, mid), rightsum = solve(mid + 1, j);
        let leftMax = nums[mid], rightMax = nums[mid + 1], bordersum = 0;
        //跨域边界的最大值
        for(let k = mid; k >= i; k--){
            bordersum += nums[k];
            if(bordersum > leftMax)
                leftMax = bordersum;
        }
        bordersum = 0;
        for(let k = mid + 1; k <= j; k++){
            bordersum += nums[k];
            if(bordersum > rightMax)
                rightMax = bordersum;
        }
        return Math.max(leftsum, rightsum, leftMax + rightMax);
    }
    return solve(0, len - 1);
}
console.log(maxSubArray([1,2]));