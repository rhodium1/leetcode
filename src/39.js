//超过83.59%
var combinationSum = function(candidates, target) {
    let len = candidates.length, re = [];
    function solve(curRe, curTarget, k){
        if(curTarget === 0){
            re.push(curRe);
            return;
        }

        for(let i = k; i < len; i++){
            if(candidates[i] <= curTarget){
                let copy = curRe.concat();
                copy.push(candidates[i]);
                solve(copy, curTarget - candidates[i], i);
            }
        }
    }
    solve([], target, 0);
    return re;
};
combinationSum([2,3,6,7], 7);