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
    // Create a dummy head.
    let dummy = new ListNode(0)
    dummy.next = head

    // Set up two pointers (first & slow) and point them to the dummy list.
    let fast = dummy
    let slow = dummy

    // Set the fast pointer to be nth steps ahead of the slow pointer.
    for (let i = 1; i < n + 1; i++) {
        fast = fast.next
    }

    // Loop through the list with the pointers till we reach the end of the list
    while (fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }

    // Point the slow pointer dot next to skip the node that comes after it.
    slow.next = slow.next.next 
    // Return dummy dot next.
    return dummy.next
};