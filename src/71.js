//68.54%
var simplifyPath = function(path) {
    let re = /(?<=\/)[^\/]+/g, pathName = [], cur, res = "/"//利用正则表达式匹配出每一层的路径名
    while(cur = re.exec(path)){
        pathName.push(cur[0]);
    }
    let len = pathName.length, i = 0;
    while(i < len){
        if(pathName[i] == ".")//如果为.则删去
            pathName.splice(i, 1);
        else if(pathName[i] == '..'){//如果为..就向上一层
            pathName.splice(i, 1);
            if(i > 0){
                pathName.splice(i - 1, 1);
                i = i - 1;
            }
        }
        else
            i++;
    }
    len = pathName.length;
    for(i = 0; i < len; i++){
        res += pathName[i] + '/';
    }
    if(len > 0)
        res = res.slice(0, res.length - 1);
    return res;
};
//较好的方法95.51%
var simplifyPath = function(path) {
    let arr = path.split('/');
    let res = [];
    for (let p of arr) {
        if (p === '..') {
            res.pop();
        } else if (p !== '' && p !== '.') {
            res.push(p);
        }
    }
    
    return '/' + res.join('/');
};