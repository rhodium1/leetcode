//45.45%
var deleteDuplicates = function(head) {
    let pre = {val: undefined, next: head}/*空的头指针 */, cur = pre.next, first = pre;
    while(cur){
        let curVal = cur.val, count = 0;
        while(cur.next && cur.next.val == curVal){
            count++;
            cur = cur.next;
        }
        if(count === 0){
            pre.next = cur;
            pre = cur;
            cur = cur.next;
        }
        else
            cur = cur.next;
    }
    pre.next = null;
    return first.next;
};