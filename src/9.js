/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false; // 负数
  if(~~(x / 10) === 0) return true; // 一位数
  if (x % 10 === 0) return false; // 末尾是0
  let reversed = 0;
  while(x > reversed) {
    const remainder = x % 10;
    x = ~~(x / 10);
    reversed = reversed * 10 + remainder;
  }
  if (x === reversed) return true;
  if (~~(reversed / 10) === x) return true;
  return false;
};