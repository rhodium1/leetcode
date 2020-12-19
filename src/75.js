//73%计数排序
// var sortColors = function(nums) {
//     let count = [0, 0, 0];
//     nums.forEach((val)=> {
//         if(val === 0)
//             count[0]++;
//         else if(val === 1)
//             count[1]++;
//         else
//             count[2]++;
//     });
//     let j = 0;
//     for(let i = 0; i < 3; i++){
//         while(count[i] > 0){
//             nums[j++] = i;
//             count[i]--;
//         }
//     }
// };
//原地修改,47%
// var sortColors = function(nums){
//     let len = nums.length;
//     if(len === 0)
//         return;
//     let i = 0, k = len - 1, j = 0;
//     while(i <= k){
//         if(nums[i] === 0){
//             if(i === j){
//                 i++; j++;
//             }
//             else{
//                 nums[i++] = 1;
//                 nums[j++] = 0;
//             }
//         }
//         else if(nums[i] === 2){
//             if(nums[k] === 2){
//                 k--;
//             }
//             else{
//                 nums[i] = nums[k];
//                 nums[k] = 2;
//             }
//         }
//         else
//             i++;
//     }
// }
let sortColors = function(nums) {
    for (let i = 0, j = 0, k = nums.length - 1; i <= k; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[j++]] = [nums[j], nums[i]];
        } else if (nums[i] === 2) {
            [nums[k--], nums[i--]] = [nums[i], nums[k]];
        }
    }
}
let a = [2,0,2,1,1,0];
sortColors(a);
console.log(a)