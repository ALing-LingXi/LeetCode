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
var detectCycle = function (head) {
  let flag = false
  let slow = head
  let fast = head
  // 判断有没有圈
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      flag = true
      break
    }
  }
  if (!flag) {
    return null
  }
// 有圈则按照公式，相遇点慢指针和头指针走的路程相等
  while (head !== slow) {
    head = head.next
    slow = slow.next
  }
  return head
};