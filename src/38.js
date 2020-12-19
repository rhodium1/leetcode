//超过了69.33%
var countAndSay = function(n) {
    let cur = '1', count = 1;
    while(count < n){
        let len = cur.length, c = 0,now, re = "";
        for(let i = 0;i < len;i++){
            now = cur[i];c = 1;
            while(i + 1 < len && cur[i] === cur[i + 1]){
                i++;
                c++;
            }
            re += c + now;
        }
        cur = re;
        count++;
    }
    return cur;
};