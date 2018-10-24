//44.93%
var canJump = function(nums) {
    let len = nums.length;
    function solve(start){
        if(start >= len - 1)
            return true;
        let can_reach = nums[start] + start;
        if(can_reach >= len - 1)
            return true;
        for(let i = start + 1; i <= can_reach; i++){
            if(i + nums[i] > can_reach){
                if(solve(i))
                    return true;
            }
        }
        return false;
    }
    return solve(0);
};
//50.0% 61.59%
var canJump = function(nums) {
    let len = nums.length;
    function solve(start, end){
        if(end >= len - 1)
            return true;
        for(let i = start; i <= end; i++){
            if(nums[i] + i > end && solve(end + 1, nums[i] + i))
                return true;
        }
        return false;
    }
    return solve(0, nums[0]);
};
