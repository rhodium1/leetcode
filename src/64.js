//72.76%
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let arr = new Array(m).fill(0);
    arr[0] = grid[0][0]
    for(let i = 1; i < m; i++){
        arr[i] = gird[i][0] + arr[i - 1];
    }
    for(let i = 1; i < n; i++){
        for(let j = 0; j < m; j++){
            if(j === 0)
                arr[j] += grid[j][i];
            else{
                let min = arr[j] > arr[j - 1] ? arr[j - 1] : arr[j];
                arr[j] = min + grid[j][i];
            }
        }
    }
    return arr[m - 1];
};