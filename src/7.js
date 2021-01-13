/**
 * @description 转字符串
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  let flag = 1;
  if (x < 0) flag = -1;
  let xS = x.toString();
  let result = xS.split('').reverse().join('');
  result = parseInt(result) * flag;
  if (result > max || result < min) {
    result = 0;
  }
  return result;
};
