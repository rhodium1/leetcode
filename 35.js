//找到目标数，或者他所应该在的位置
//超过了99.49% 二分查找
var searchInsert = function(nums, target) {
    let len = nums.length, left = 0; right = len - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            if(mid + 1 >= len || nums[mid + 1] > target)
                return mid + 1;
            else
                left = mid + 1;
        }
        else{
            if(mid - 1 < 0 || nums[mid - 1] < target)
                return mid;
            else
                right = mid -1;
        }
    }
};