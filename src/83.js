//10.8%
var deleteDuplicates = function(head) {
    if(!head)
        return head;
    let i = head, j = head.next, preValue = i.val;
    while(j != null){
        if(j.val === preValue){
            j = j.next;
        }else{
            i.next = j;
            i = j;
            preValue = i.val;
            j = j.next;
        }
    }
    i.next = null;
    return head;
};