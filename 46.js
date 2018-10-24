//76.6%,递归
var permute = function(nums) {
    let re = [], len = nums.length; added = new Array(len).fill(0);
    function solve(isadded, arr, n){//表示第i个元素是否被添加过，目前的数组，第几个位置
        for(let i = 0; i < len; i++){
            if(isadded[i] === 0){//如果当前元素没有被添加过，push进数组
                let cur_added = isadded.concat();
                cur_arr = arr.concat();
                cur_arr.push(nums[i]);
                cur_added[i] = 1;
                solve(cur_added, cur_arr, n + 1);
            }
        }
        if(n === len){//所有元素都被添加进去了，并且目前是在最后一层递归。
            re.push(arr);
        }
    }
    solve(added, [], 0);
    return re;
};
console.log(permute([1, 2, 3]))