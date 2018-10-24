//18.75%
//动态规划，类似与字符串编辑长度的算法，做一个n * m 的矩阵
//有空再想更快的做法
var isMatch = function(s, p) {
    let len1 = s.length, len2 = p.length, arr = new Array(len1 + 1);
    for(let i = 0; i <= len1; i++){
        arr[i] = new Array(len2 + 1).fill(0);
    }
    arr[0][0] = 1;
    for(let i = 1; i <= len2; i++){
        if(p[i - 1] == "*" && arr[0][i - 1] === 1)
            arr[0][i] = 1;
    }
    for(let i = 1; i <= len1; i++){
        for(let j = 1; j <= len2; j++){
            let flag = false;
            if(arr[i - 1][j - 1] === 1 || arr[i - 1][j] === 1 || arr[i][j - 1] === 1)
                flag = true;
            if(p[j - 1] === "*" && flag)//如果当前模式为*则看左上角三个是否有匹配成功的
                arr[i][j] = 1
            else if(p[j - 1] === "?" || s[i - 1] === p[j - 1]){//如果当前模式字符和字符串字符相等则看左上角的那个是否匹配成功
                if(arr[i - 1][j - 1] === 1)
                    arr[i][j] = 1;
                
            }
        }
    }
    return (arr[len1][len2] === 1);
};

