/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 采用递归
    if (l1 == null) {
        // 递归出口，当输入的节点为空，返回另一个
        return l2
    } else if (l2 == null) {
        return l1
    } else if (l1.val <= l2.val) {
        // 当l1小于l2,将l1和后续的merge相连接
        l1.next = mergeTwoLists(l1.next, l2)
        // 返回链表的头结点
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }   
};