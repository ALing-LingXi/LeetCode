// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   // 先判断链表的长度，找出长链表和短链表
//   let p1 = l1;
//   let p2 = l2;
//   let p11 = l1
//   let p22 = l2
//   let long = null;
//   let short = null;
//   while (p1 && p2&&p1.next&&p2.next) {
//     p1 = p1.next;
//     p2 = p2.next;
//   }
//   if (p1.next) {
//     long = p11;
//     short = p22;
//   } else {
//     long = p22;
//     short = p11;
//   }
//   // 通过指针把短链表的值加到长链表那边
//   // 如果长链表的值超过10则通过next指针进一位
//   while (short&&short.next) {
//     long.val += short.val;
//     if(long.val>=10){
//       long.val=long.val%10
//       if(long.next){
//         long.next.val+=1
//         if(long.next.val>=10&&!long.next.next){
//           long.next.next.val%=10
//         }
//       }
//     }
//     long = long.next;
//     short = short.next;
//   }
//   return l1
// };

// 以上方案完全作废处理不了连续进位

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
var addTwoNumbers = function (l1, l2) {
  // 我们创建一个新的链表，带哨兵最后返回哨兵的下一位就行了
  const dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry > 0) {
    // js不会自动取整
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = carry + v1 + v2;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    cur = cur.next;
  }
  return dummy.next;
};
