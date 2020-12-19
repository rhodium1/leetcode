//10%,编辑距离问题用一个
var minDistance = function(word1, word2) {
    let len1 = word1.length, len2 = word2.length, martix = new Array(len1 + 1);
    for(let i = 0; i < len1 + 1; i++)
        martix[i] = new Array(len2 + 1);
    for(let i = 0; i < len2 + 1; i++){
        martix[0][i] = i;
    }
    for(let i = 0; i < len1 + 1; i++){
        martix[i][0] = i;
    }
    for(let i = 1; i < len1 + 1; i++){
        let flag = false;
        for(let j = 1; j < len2 + 1; j++){
            let m = Math.min(martix[i - 1][j - 1], martix[i][j - 1], martix[i - 1][j]);
            if(word1[i - 1] === word2[j - 1]){//如果当前两个字符相等，就等于m[i - 1][j - 1];
                martix[i][j] = martix[i - 1][j - 1];
            }
            else//不相等就为最小值+1
                martix[i][j] = m + 1;
        }
    }
    console.log(martix);
    return martix[len1][len2];
};
