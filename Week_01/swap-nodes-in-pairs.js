/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var swapPairs = function(head) {
    
    if (head == null || head.next == null) return head

    let start = head.next

    let last = null
    let cur = head
    let nxt = null
    
    while (cur && cur.next) {
        nxt = cur.next
        let tmp = nxt.next
        nxt.next = cur
        cur.next = tmp

        // 上一次两两反转后的尾端，指向这次的翻转链表头
        if(last)last.next = nxt
        // 定义翻转后的链表尾端
        last = cur

        cur = cur.next
    }
    return start
};