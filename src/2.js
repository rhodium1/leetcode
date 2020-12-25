/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let num1 = l1;
  let num2 = l2;
  let carry = 0;
  const Head = {next: null};
  let pointer = Head;
  while(num1 || num2 || carry) {
    const add1 = (num1 && num1.val) || 0;
    const add2 = (num2 && num2.val) || 0;
    const curSum = add1 + add2 + carry;
    const curValue = curSum % 10;
    carry = ~~(curSum / 10);
    pointer.next = { val: curValue, next:null};
    num1 = num1 && num1.next;
    num2 = num2 && num2.next;
    pointer = pointer.next;
  }
  return Head.next;
};
