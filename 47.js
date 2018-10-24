//76.83%
//比上一题每一层递归多一个去重就可以
var permuteUnique = function(nums) {
    let re = [], len = nums.length;
    function solve(isadded, arr, n){
        let obj = {};
        for(let i = 0; i < len; i++){
            if(isadded[i] === 0 && !obj[nums[i]]){
                let cur_add = isadded.concat(), cur_arr = arr.concat();
                cur_add[i] = 1;
                obj[nums[i]] = 1;
                cur_arr.push(nums[i]);
                if(n === len - 1){
                    re.push(cur_arr);
                    return;
                }
                solve(cur_add, cur_arr, n + 1);
            }
        }
    }
    let isadded = new Array(len).fill(0);
    solve(isadded, [], 0);
    return re;
};