//通过 超过了32.5%
var findSubstring = function(s, words) {
    if(words.length === 0)
        return [];
    let result = [],count={},re="",cur = -1,match, nextMatch = -1,temp=[],n = 0,len = words.length,stand={},firstMatch = "";
    words.forEach((s,index)=>{
        if(stand.hasOwnProperty(s))
            stand[s]++;
        else
            stand[s] = 1;
        count[s] = 0;
        if(index >0) 
            re+='|';
        re +="(" + s +")";
    });
    re = new RegExp(re,'g');
    while(match = re.exec(s)){
        if(nextMatch === -1){
            n = 1;
            cur = match.index;
            firstMatch = match[0];
            count[match[0]] = 1;
            nextMatch = cur + match[0].length;
            if(words.length === 1)
                {result.push(cur);nextMatch = -1;}
        }
        else{
            if(match.index === nextMatch){
                if(count[match[0]] < stand[match[0]]){
                    count[match[0]]++;
                    n++;
                    if(n === len){
                        result.push(cur);
                        nextMatch = -1;
                        Object.keys(count).forEach((s)=>count[s] = 0);
                        re.lastIndex = cur + 1; 
                    }
                    else{
                        nextMatch = match.index + match[0].length;
                    }
                }
                else{
                    Object.keys(count).forEach((s)=>count[s] = 0);
                    nextMatch = -1;
                    re.lastIndex = cur + 1;
                }
            }
            else{
                Object.keys(count).forEach((s)=>count[s] = 0);
                re.lastIndex = cur + 1;
                nextMatch = -1;
            }
        }
    }
    return result;
};
findSubstring("abaababbaba",["ab","ba","ab","ba"]);