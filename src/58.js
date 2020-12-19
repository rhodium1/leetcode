//88.93%
var lengthOfLastWord = function(s) {
    s = s.trim();
    let len = s.length, count = 0;
    for(let i = len - 1; i >= 0; i--){
        if(s[i] != " ")
            count++;
        else
            break;
    }
    return count;
};