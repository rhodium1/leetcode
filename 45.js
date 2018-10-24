//一样的代码提交了两遍一次28.75%，另一遍97.59%
var jump = function(nums) {
    let len = nums.length, i = 0, count = 0, cur = nums[i] + i;
    if(len === 1)
        return 0;
    while(cur < len - 1){
        let max = 0, maxindex = i;
        for(let j = i; j <= cur; j++){
            if(j + nums[j] > max){
                max = j + nums[j];
                maxindex = j;
            }
        }
        count++;
        cur = max;
        i = maxindex;
    }
    return count + 1;
};