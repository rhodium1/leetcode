//83.3%递增栈，通过递增栈找到以当前条为高的矩阵的面积；具体解析见https://blog.csdn.net/lv1224/article/details/79974175

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
largestRectangleArea([2, 1, 5, 6, 2, 3]);