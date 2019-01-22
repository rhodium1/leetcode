//7.72%
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length, obj = {};
    if(obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1)
        return 0;
    function solve(i, j){
        let re, key = i + "-" + j, top = 0, left = 0;
        if(obj[key])
            return obj[key];
        else{
            if(i === 0 && j === 0)
                re = 1;
            else{
                if(i - 1 >= 0 && obstacleGrid[i - 1][j] === 0)
                    top = solve(i - 1, j);
                if(j - 1 >= 0 && obstacleGrid[i][j - 1] === 0)
                    left = solve(i, j - 1);
                re = top + left;
            }      
        }
        obj[key] = re;
        return re;
    }
    return solve(m - 1, n - 1);

};