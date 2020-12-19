//72.95%
var groupAnagrams = function(strs) {
    let len = strs.length, re = [], a = "a".charCodeAt(0), o = {};
    for(let i = 0; i < len; i++){
        let arr = new Array(26).fill(0);
        let s = strs[i], len_s = s.length;
        for(let j = 0; j < len_s; j++){
            arr[s.charCodeAt(j) - a]++;
        }
        let cur_key = arr.join("");
        if(o.hasOwnProperty(cur_key))
            o[cur_key].push(s);
        else{
            let cur_a = [];
            cur_a.push(s);
            o[cur_key] = cur_a;
        }
    }
    for(let i of Object.keys(o)){
        re.push(o[i]);
    }
    return re;
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
