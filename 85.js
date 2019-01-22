//26.31%,对每一行进行上一题的算法，
var maximalRectangle = function(matrix) {
    var largestRectangleArea = function(heights) {
        heights.push(0);
        let stack = [-1], len = heights.length, max = 0;
        for(let i = 0; i < len; i++){
            while(heights[i] <= heights[stack[stack.length - 1]]){
                let cur = stack.pop();
                let curArea = heights[cur] * (i - stack[stack.length - 1] - 1);
                if(curArea > max)
                    max = curArea;
            }
            stack.push(i);
        }
        return max;
    };
    let len1 = matrix.length;
    if(len1 === 0)
        return 0;
    let len2 = matrix[0].length, pre = matrix[0];
    pre = pre.map((val) => parseInt(val));
    let max = largestRectangleArea(pre);
    
    for(let i = 1; i < len1; i++){
        let cur = matrix[i].map((val)=>parseInt(val));
        for(let j = 0; j < len2; j++){
            if(cur[j] > 0)
                cur[j] = cur[j] + pre[j];
        }
        pre = cur;
        //84题的算法
        let curArea =   largestRectangleArea(pre);
        if(curArea > max) max = curArea;
    }
    return max;
};
console.log(maximalRectangle([
    [1,0,1,0,0],
    [1,0,1,1,1],
    [1,1,1,1,1],
    [1,0,0,1,0]
  ]))