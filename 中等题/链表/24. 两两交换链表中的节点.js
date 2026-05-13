/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return [];
  if (!head.next) return head;
  const arr = [];
  let k =0
  let slow, fast;
  slow = fast = head;
  fast=fast.next
  while(fast){
    arr.push(fast)
    arr.push(slow)
    arr[k].next=arr[k+1].next
    k++
    slow=slow.next
    fast=fast.next
  }
  return arr[0]
};
