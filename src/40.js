//48.4%
var combinationSum2 = function(candidates, target) {
    let re = [], len = candidates.length;
    candidates.sort((x, y) => x - y);
    function solve(cur_re, cur_target, i){
        if(cur_target === 0){
            re.push(cur_re);
            return;
        }
        let hasUsed = {}; 
        for(let j = i; j < len; j++){
            let copy = cur_re.concat();
            if(!hasUsed[candidates[j]] && candidates[j] <= cur_target){//递归同一层的数字不能重复
                hasUsed[candidates[j]] = 1;
                copy.push(candidates[j]);
                solve(copy, cur_target - candidates[j], j+1);//递归求解
            }
        }
    }
    solve([], target, 0);
    //去重
    return re;
};