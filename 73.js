//额外的空间复杂度为n，52.53%
// var setZeroes = function(matrix) {
//     let coor = [];
//     matrix.forEach((arr, i) => {
//         arr.forEach((value, j) => {
//             if(value === 0)
//                 coor.push([i, j]);
//         })
//     });
//     let len1 = matrix.length, len2 = matrix[0].length, len3 = coor.length;
//     for(let i = 0; i < len3; i++){
//         for(let j = 0; j < len2; j++)
//             matrix[coor[i][0]][j] = 0;
//         for(let j = 0; j < len1; j++)
//             matrix[j][coor[i][1]] = 0;
//     }
// };
// setZeroes([[0, 1]]);

//额外的空间复杂度为常数,38%
//每个矩阵的第一行和第一列特殊考虑，将第一行和第一列作为是否变0的标识
var setZeroes = function(matrix) {
    let len1 = matrix.length, len2 = matrix[0].length, flag1 = false, flag2 = false;
    for(let i = 0; i < len2; i++){
        if(matrix[0][i] === 0)
            {flag1 = true;break;}
    }
    for(let i = 0; i < len1; i++){
        if(matrix[i][0] === 0)
            {flag2 = true;break;}
    }
    for(let i = 0; i < len1; i++){
        for(let j = 0; j < len2; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = len1 - 1; i > 0; i--){
        if(matrix[i][0] === 0)
            for(let j = len2 - 1; j > 0; j--){
                matrix[i][j] = 0;
            }
        else
            for(let j = len2 - 1; j > 0; j--){
                if(matrix[0][j] === 0)
                    matrix[i][j] = 0;
            }
    }
    if(flag1)
        for(let j = len2 - 1; j >= 0; j--){
            matrix[0][j] = 0;
        }
    if(flag2)
        for(let i = 0; i < len1; i++)
            matrix[i][0] = 0;
};
setZeroes([[1,1,1],[1,0,1],[1,1,1]]);