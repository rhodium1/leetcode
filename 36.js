//一次过 超过了 78.52%
var isValidSudoku = function(board) {
    function isValid(x1, y1, x2, y2){
        var o = new Array(10);
        o.fill(0);
        if(x1 === x2){//列
            for(let i = 0; i < 9;i++){
                let cur = board[x1][i];
                if(cur != '.'){
                    if(o[cur] === 0)
                        o[cur] = 1;
                    else
                        return false;
                }
            }
            return true;
        }
        else if(y1 === y2){//行
            for(let i = 0;i<9;i++){
                let cur = board[i][y1];
                if(cur != '.'){
                    if(o[cur] === 0)
                        o[cur] = 1;
                    else
                        return false;
                }
            }
            return true;
        }
        else{ //九宫格
            for(let i = 0;i<3;i++){
                for(let j = 0;j<3;j++){
                    let cur = board[x1 + i][y1 + j];
                    if(cur != '.'){
                        if(o[cur] === 0){
                            o[cur] = 1;
                        }
                        else
                            return false;
                    }
                }
            }
            return true;
        }

    }
    for(let i = 0;i<9;i++){
        if(!(isValid(i, 0, i, 8) && isValid(0, i, 8, i)))
            return false;
    }
    for(let i = 0; i<9;i += 3){
        for(let j = 0; j < 9; j += 3){
            if(!isValid(i, j, i + 2, j + 2))
                return false;
        }
    }
    return true;
};
