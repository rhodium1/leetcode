//70.51%
//找出最高点，然后从两边往最高点遍历
var trap = function(height) {
    let len = height.length, maxHeight = height[0], maxIndex = 0, re = 0;
    for(let i = 0; i < len; i++){
        if(height[i] > maxHeight){
            maxHeight = height[i];
            maxIndex = i;
        }
    }
    maxHeight = height[0];
    for(let i = 0; i < maxIndex; i++){
        if(height[i] > maxHeight){
            maxHeight = height[i];
        }
        else{
            re += maxHeight - height[i];
        }
    }
    maxHeight = height[len - 1];
    for(let i = len - 1; i > maxIndex; i--){
        if(height[i] > maxHeight){
            maxHeight = height[i];
        }
        else{
            re += maxHeight - height[i];
        }
    }
    
    return re;
};
trap([1, 2, 0, 2]);