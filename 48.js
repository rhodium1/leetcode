//选转矩阵，不能利用额外的矩阵
//73.3%
var rotate = function(matrix) {
    let len = matrix[0].length, times = len / 2, counts = len;
    for(let i = 0; i < times; i++){
        let startx = 0 + i, starty = 0 + i;
        for(let j = 0; j < counts - 1; j++){
            let cur_x = startx, cur_y = starty + j;
            let temp = matrix[cur_x][cur_y];
            for(let k = 0; k < 4; k++)
            {
                let t = cur_x;
                cur_x = cur_y;
                cur_y = len - 1 - t;
                let next_temp = matrix[cur_x][cur_y];
                matrix[cur_x][cur_y] = temp;
                temp = next_temp;
            }
        }
        counts -= 2;
    }
};