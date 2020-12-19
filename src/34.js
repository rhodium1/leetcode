//在排序数组中找到指定元素所在的范围，要求复杂度log(n)
//通过 超过 87.5% 二分法找最后一个小于 target的下标与第一个大于target的下标
var searchRange = function(nums, target) {
    let len = nums.length, left = 0; right = len - 1, lastLow = -1, firstHigh = -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] < target){
            if( mid + 1 < len && nums[mid +1] === target){
                lastLow = mid;
                break;
            }
            else
                left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    if(lastLow === -1){
        if(nums[0] != target)
            return [-1, -1];           
    }
    left = 0; right = len - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] <= target){
            left = mid + 1;
        }
        else{
            if(mid - 1 >= 0 && nums[mid - 1] === target)
                {firstHigh = mid; break;}
            else
                right = mid - 1;
        }
    }
    if(firstHigh === -1){
        firstHigh = len;
    }
    return [lastLow + 1, firstHigh - 1];  
};
searchRange([5,7,7,8,8,10], 8);