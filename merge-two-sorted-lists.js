/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const result = [...list1, ...list2].sort()
    return result
};

const l1 = [1,2,4]
const l2 = [1,3,4]

console.log(mergeTwoLists(l1, l2))