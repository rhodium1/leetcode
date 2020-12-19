//60.67%
public class Lc61{
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null)
            return null;
        ListNode h = head;
        int count = 0;
        while(h.next != null) {
        	count++;
        	h = h.next;
        }
        h.next = head;
        count++;
        h = head;
        k = k % count;
        k = count - k;
        for(int i = 0; i < k - 1; i++) {
        	h = h.next;
        }
        ListNode re = h.next;
        h.next = null;
        return re;
    }
}