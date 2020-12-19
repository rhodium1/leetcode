//同样的代码提交了三次时间分别为92ms, 372ms和124ms。。。。
//先将原数组按照start排序，然后一个一个合并就行
var merge = function(intervals) {
    intervals.sort((x, y) => {
        return x.start - y.start;
    });
    let re = [], len = intervals.length, i = 0, j = 1;
    if(len === 0)
        return [];
    re.push(intervals[0]);
    while(j < len){
        if(intervals[j].start <= re[i].end){
            re[i].end = re[i].end > intervals[j].end ? re[i].end : intervals[j].end;
            j++; 
        }
        else{
            re.push(intervals[j]);
            j++;
            i++;
        }
    }
    return re;
};