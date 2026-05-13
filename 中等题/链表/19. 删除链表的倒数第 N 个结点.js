/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p = head
  if(!head) return []
  const arr =[]
    while(p){
      arr.push(p)
      p=p.next
    }
    // 要删除的节点
    let k = arr.length-n
    if(k===0){
      return head.next
    }
    // 找前驱
    let prev = k-1
    arr[prev].next = arr[k].next
    return head
};


// 双指针法

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    // fast 先走 n 步
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // 同时移动，直到 fast 走到尽头
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 删除节点
    slow.next = slow.next.next;

    return dummy.next;
};