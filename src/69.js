//二分法37%，偷鸡法63.51%
var mySqrt = function(x) {
    let left = 0, right = x;
    while(left <= right){
        let mid = ~~((left + right) / 2);
        let cur = mid * mid;
        if(cur === x)
            return mid;
        else if(cur < x){
            if((mid + 1) * (mid + 1) > x)
                return mid;
            else if ((mid + 1) * (mid + 1) === x)
                return mid + 1;
            else
                left = mid + 1;

        }
        else{
            right = mid - 1;
        }
    }
};