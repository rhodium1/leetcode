//通过超过了82.57%
var longestValidParentheses = function(s) {
    let n = 0, len = s.length, count = [], result = [], lastMin = [];
    for(let i = 0;i<len;i++){
        if(s[i] === '(')
            n++;
        else{
            n--;
            count.push(n);
            if(n < 0)
                n = 0;
        }
    }
    len = count.length;
    for(let i = 0;i<len;i++)
    {
        if( count[i] === -1)
            continue;
        if(result.length === 0)
            result.push(2);
        else{
            if(count[i] <= count[i-1])
            {
                result[result.length - 1] += 2;
                if(lastMin.length && count[i] === lastMin[lastMin.length - 1]){
                    result[result.length - 2] += result[result.length - 1];
                    result.pop();
                    lastMin.pop();
                }
            }
            else{
                result.push(2);
                lastMin.push(count[i - 1]);
            }
        }
    }
    let max = 0;
    result.forEach(x =>{ 
        if(x > max)
            max = x;
    });
    return max;
};
console.log(longestValidParentheses("()(((()(()))))"));