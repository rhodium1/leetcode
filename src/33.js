//在一个排序数组的绕某一点的旋转数组中找某一个元素，要求复杂度为log(n);
//通过超过了97.13% 先用二分法找出拐点，再用而分法找到有序数组中的下标，然后再将此下标转换成实际下标
var search = function(nums, target){
    if(nums.length === 0)
        return -1;
    else if(nums.length === 1){
        if(nums[0] === target)
            return 0;
        else
            return -1;
    }
    let len = nums.length, left = 0, right = len-1, point = len - 1, first = nums[0];
    while(left <= right){//二分法找拐点
        let mid = Math.floor((left + right) / 2);
        if((mid + 1 < len && nums[mid] > nums[mid + 1])){//如果是拐点
            point = mid;
            break;
        }
        else if(nums[mid] >= nums[0]){//不是拐点且比第一个数字大，就在右边找拐点
            left = mid + 1;
        }
        else{//在左边找拐点
            right = mid - 1;
        }
    }
    let arrLeft = nums.splice(0,point + 1);
    nums = nums.concat(arrLeft);//复原数组
    left = 0; right = len-1;
    while(left <= right){//二分法找target
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            if(point === len - 1)
                return mid;
            else{
                if(target >= first)
                    return mid - (len - point - 1);
                else
                    return mid + point + 1;
            }
        }
        else if(nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
};
search([4,5,6,7,0,1,2], 0);