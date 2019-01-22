//2.5%
let head = {val: 1}, arr = [1,4,3,2,5,2], cur = head;
for(let i = 1; i < 6; i++){
    let node = {val:arr[i], next: null};
    cur.next = node;
    cur = node;
}


var partition = function(head, x) {
    if(!head || head.next === null)
        return head;
    let firstLarge= null, lastLarge = null, firstLow = null, lastLow=null;
    let cur = head;
    while(cur){
        if(cur.val >= x){
            if(firstLarge == null){
                firstLarge = cur;
                lastLarge = cur;
            }
            else{
                lastLarge.next = cur;
                lastLarge = cur;
            }
        }else{
            if(firstLow == null){
                firstLow = cur;
                lastLow = cur;
            }else{
                lastLow.next = cur;
                lastLow = cur;
            }
        }
        cur = cur.next;
    }
    if(!lastLow || !lastLarge){
        return head;
    }
    lastLow.next = firstLarge;
    lastLarge.next = null;
    return firstLow;
};
let re = partition(head, 3);
