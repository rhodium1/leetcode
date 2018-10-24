//超过76.12%
var spiralOrder = function(matrix) {
    let directions = ["right", "bottom", "left", "top"], lenx = matrix.length; 
    if(lenx === 0)
        return [];
    let leny = matrix[0].length, re = [];
    let isadded = new Array(lenx), cur_dir = 0;
    for(let i = 0; i < lenx; i++){
        isadded[i] = new Array(leny).fill(0);
    }
    let i = 0, j = 0;
    re.push(matrix[i][j]);
    isadded[i][j] = 1;
    let flag = true, total = lenx * leny;
    while(re.length < total){
        switch(directions[cur_dir]){
            case "right":
                if(j + 1 < leny && isadded[i][j + 1] === 0){
                    j++;
                    re.push(matrix[i][j]);
                    isadded[i][j] = 1;
                }
                else{
                    cur_dir = (cur_dir + 1) % 4;
                }
                break;
            case "bottom":
                if(i + 1 < lenx && isadded[i + 1][j] === 0){
                    i++
                    re.push(matrix[i][j]);
                    isadded[i][j] = 1;
                }
                else{
                    cur_dir = (cur_dir + 1) % 4;
                }
                break;
            case "left":
                if(j - 1 >= 0 && isadded[i][j - 1] === 0){
                    j--;
                    re.push(matrix[i][j]);
                    isadded[i][j] = 1;
                }
                else{
                    cur_dir = (cur_dir + 1) % 4;
                }
                break;
            case "top":
                if(i - 1 >= 0 && isadded[i - 1][j] === 0){
                    i--;
                    re.push(matrix[i][j]);
                    isadded[i][j] = 1;
                }
                else{
                    cur_dir = (cur_dir + 1) % 4;
                }
                break;
        }
    }
    return re;
};
spiralOrder([[3], [2]]);