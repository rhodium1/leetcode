//39.41%
var uniquePaths = function(m, n) {
    let obj = {};
    function solve(x, y){
        let re, key = x + "-" + y;
        if(obj[key])
            return obj[key];
        else{
            if(x == 1 && y == 1)
                re = 1;
            else if(x == 1){
                re = solve(x, y - 1);
            }
            else if(y == 1)
                re = solve(x - 1, y);
            else 
                re = solve(x - 1, y) + solve(x, y - 1);
            obj[key] = re;
            return re;
        }

        
    }
    return solve(m, n);
};
console.log(uniquePaths(3, 3));