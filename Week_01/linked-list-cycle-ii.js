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
var detectCycle = function(head) {
    
    if (head == null || head.next == null)  return null
    
    // 采用双指针 判断是否有环
    let slow = head.next
    let fast = head.next.next
    let result = false
    while(fast && fast.next){
        // 如果两个指针的指向相同，则表示已经查找到环。
        // 但两个指针相遇的节点不一定是环的连接点，而是在环的某个位置
        if (slow == fast) {
            result = true
            break
        }
        slow = slow.next
        fast = fast.next.next
    }
   if (result) {
       // 找到环的开头
        slow = head
        while (slow != fast) {
            slow = slow.next                
            fast = fast.next
        }
        return slow
   } else {
       return null
   }
}