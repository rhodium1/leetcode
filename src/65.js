//19.4%偷鸡算法，看了一下最快的答案用正则表达式做
var isNumber = function(s) {
    s = s.trim();
    if(s ==="")
        return false;
    return !isNaN(s - 0);
    
};