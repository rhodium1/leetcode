//解数独
//回溯法，通过超过29.41%
var solveSudoku = function(board) {
    function solve(sudo){
        let curSudo = [];
        for(let i = 0;i<9;i++)
            curSudo.push(sudo[i].concat());
        for(let i = 0;i < 9;i++){
            for(let j = 0;j<9;j++){
                if(curSudo[i][j] === '.'){
                    let o = new Array(10).fill(0);
                    for(let k = 0;k<9;k++){//检测行列
                        if(curSudo[i][k] != '.')
                            o[curSudo[i][k]] = 1;
                        if(curSudo[k][j] != '.')
                            o[curSudo[k][j]] = 1;
                    }
                    let origini = i - (i % 3), originj = j - (j % 3);
                    for(let k = 0;k<3;k++){//检测九宫格
                        for(let h = 0;h<3;h++){
                            if(curSudo[origini + k][originj + h] != '.')
                                o[curSudo[origini + k][originj + h]] = 1;
                        }
                    }
                    for(let k = 1;k<10;k++){
                        if(o[k] === 0){
                            curSudo[i][j] = k.toString();
                            if(solve(curSudo))
                                return true;
                            else
                                curSudo[i][j] = '.'
                        }
                    }
                    return false;
                }
            }
        }
        for(let i = 0;i<9;i++){
            for(let j = 0; j < 9;j++){
                if(board[i][j] === '.')
                    board[i][j] = curSudo[i][j];
            }
        }
        return true;
    }
    solve(board);
};