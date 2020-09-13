/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 1. 先遍历有多少个节点， 求出k的大小
// 2. 依次翻转
// ↑↑这个想法，感觉节点连接不起来↑↑

// 翻转节点A至节点b的节点
// 返回的pre是链表开头 链表结尾是null，
function reverse (nodeA, nodeB) {
    let pre = null
    let cur = nodeA
    let nxt = nodeA
    while (cur !== nodeB) {
        nxt = cur.next
        cur.next = pre

        pre = cur
        cur = nxt
    }
    return pre
}

var reverseKGroup = function(head, k) {
    // 两两翻转链表的升级版

    let nodeA = head
    let nodeB = head

    // 找到k个元素后的b节点位置，如果不足k个，就终止递归
    for (let i = 0; i < k; i++) {
        // 如果不足k个，则返回不足k个的头结点
        // 递归的出口
        if (nodeB == null) return head
        nodeB = nodeB.next
    }

    // 翻转k个节点
    let newHead = reverse(nodeA, nodeB)

    //连接递归翻转后的链表
    nodeA.next = reverseKGroup(nodeB, k)

    return newHead
};