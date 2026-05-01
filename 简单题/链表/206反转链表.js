// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     const arr =[]
//     if(!head) return arr
//     while(head){
//       arr.push(head.pop())
//       head=head.next
//     }
//     head = arr[0]
//     for(let i=1;i<arr.length;i++){
//       head.next = arr[i]
//     }
//     head = arr[0]
//     return head
// };

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
var reverseList = function(head) {
    if(!head) return null
    const arr =[]
    let cur = head
    while(cur){
      arr.push(cur)
      cur=cur.next
    }
    for(let i=arr.length-1;i>0;i--){
      arr[i].next = arr[i-1]
    }
    arr[0].next = null
    return arr[arr.length-1]
};