//递归算法，巨慢0.94%
var climbStairs = function(n) {
    let times = new Array(n + 1);
    times[1] = 1;
    times[2] = 2;
    times[0] = 0;
    function solve(m){
        if(times[m])
            return times[m];
        else{
            times[m] = solve(m - 1) +  solve(m - 2);
            return tiems[m];
        }
    }
    return solve(n);
};
//普通循环算法，3.87%，明明和排名第一的算法一样
var climbStairs = function(n) {
    if(n === 1)
        return 1;
    let m = 1, k = 2;
    for(let i = 3; i <= n; i++){
        let temp = k;
        k = m + k;
        m = temp;
    }
    return k;
};

