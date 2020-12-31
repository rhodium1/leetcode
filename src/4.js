/**
 * @description log(n) 复杂度
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if(!len1 && !len2) return;
  let k = ~~((len1 + len2) / 2);
  const isEven = (len1 + len2) % 2;
  let longerNums = nums1, shorterNums = nums2, longerIndex = 0, shorterIndex = 0;
  let kthNumber;
  if (longerNums.length - longerIndex < shorterNums.length - shorterIndex) {
    [longerNums, shorterNums] = [shorterNums, longerNums];
    [longerIndex, shorterIndex] = [shorterIndex, longerIndex];
  } 
  while(k > 0) {
    if (longerNums.length - longerIndex < shorterNums.length - shorterIndex) {
      [longerNums, shorterNums] = [shorterNums, longerNums];
      [longerIndex, shorterIndex] = [shorterIndex, longerIndex];
    } 
    if(shorterNums.length - shorterIndex <= 0) {
      longerIndex = longerIndex + k - 1;
      kthNumber = longerNums[longerIndex];
      longerIndex++;
      break;
    }
    if (k === 1) {
      kthNumber = longerNums[longerIndex];
      longerIndex++;
      if (shorterNums[shorterIndex] !== undefined && shorterNums[shorterIndex] < kthNumber) {
        kthNumber = shorterNums[shorterIndex];
        shorterIndex++;
        longerIndex--;
      }
      break;
    }
    let halfK = ~~(k / 2);
    let nextShortIndex = shorterIndex + halfK - 1;
    let nextLongerIndex = longerIndex + k - halfK -1;
    if(nextShortIndex >= shorterNums.length) {
      nextShortIndex = shorterNums.length - 1;
      halfK = shorterNums.length - shorterIndex;
      nextLongerIndex = longerIndex + k - halfK - 1;
    }
    if (longerNums[nextLongerIndex] > shorterNums[nextShortIndex]) {
      shorterIndex = nextShortIndex + 1;
      k = k - halfK;
    } else {
      longerIndex = nextLongerIndex + 1;
      k = halfK;
    }
  }
  if (longerNums.length - longerIndex < shorterNums.length - shorterIndex) {
    [longerNums, shorterNums] = [shorterNums, longerNums];
    [longerIndex, shorterIndex] = [shorterIndex, longerIndex];
  }
  let k1thNumber = longerNums[longerIndex];
  if (shorterNums[shorterIndex] !== undefined && shorterNums[shorterIndex] < k1thNumber) {
    k1thNumber = shorterNums[shorterIndex];
  }
  if (isEven) {
    return k1thNumber;
  } else {
    return (k1thNumber + kthNumber) / 2;
  }
};
