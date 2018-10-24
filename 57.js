//97.44;
var insert = function(intervals, newInterval) {
    let re = [], len = intervals.length;
    let i = 0;
    while(i < len && intervals[i].end < newInterval.start)
    {
        re.push(intervals[i]);
        i++;
    }
    if(i >= len)
    {
        re.push(newInterval);
        return re;
    }
    let inter = new Interval(-1, -1);
    inter.start = intervals[i].start <= newInterval.start ? intervals[i].start : newInterval.start;
    while(i < len && intervals[i].end <= newInterval.end)
    {
        i++;
    } 
    if(i >= len || intervals[i].start > newInterval.end)
    {
        inter.end = newInterval.end;
    }
    else
    {
        inter.end = intervals[i].end;
        i++;
    }
    re.push(inter);
    while(i < len)
    {
        re.push(intervals[i]);
        i++;
    }
    return re;
};