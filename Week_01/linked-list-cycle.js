/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1. 快慢指针
var detectCycle = function(head) {

    if (head && head.next) {
        // 采用双指针 判断是否有环
        let slow = head
        let fast = head.next
        while(fast && fast.next){
            // 如果两个指针的指向相同，则表示已经查找到环。
            // 但两个指针相遇的节点不一定是环的连接点，而是在环的某个位置
            if (slow == fast) {
                return true
            }
            slow = slow.next
            fast = fast.next.next
        }
    }

    return false
}

// 2. 暴力哈希法
var detectCycle = function(head) {
    let map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, true)
        head = head.next
    }
    return false
}
