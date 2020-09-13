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
/**
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */
// 1. 迭代法
var reverseList1 = function(head) {
    let pre = null
    let cur = head
    while (cur) {
        let tmp = cur
        cur.next = pre
        
        pre = cur
        cur = tmp
    }
    return pre
};

// 2. 递归法 
// 递归法 可以理解为从尾端开始遍历    
var reverseList2 = function(head) {
    if (!head) return null
    if (head.next == null) return head
    // 开始递归 newHead接受翻转后节点的头结点 相当于题例中的5元素
    let last = reverseList2(head.next)
    // 将旧的头结点和newHead链接 此时1还连着2，但2的next已经是null了
    // 这步将2的next指向1，链接2和1
    head.next.next = head
    // 将1的next指向null
    head.next = null
    
    // 返回翻转后的头节点
    return last
};