//41% 当第一个元素和最后一个元素不相等时，套用不含重复元素的算法，相等就用O(n)的算法，这里懒得写了，就直接用O(n)算法
var search = function(nums, target) {
    if(nums.indexOf(target) === -1)
        return false;
    return true;
    
};