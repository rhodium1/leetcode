//50%
var searchMatrix = function(matrix, target) {
    let len1 = matrix.length;
    if(len1 === 0)
        return false;
    let len2 = matrix[0].length, left = 0, right = len1 * len2 - 1;
    while(left <= right){
        let mid = (left + right) / 2 | 0;
        let cur = matrix[mid / len2 | 0][mid % len2];
        if(cur === target)
            return true;
        else{
            if(cur > target)
                right = mid - 1;
            else
                left = mid + 1;
        }
    }
    return false;

};