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
var hasCycle = function(head) {
    // Set two pointer, fast and slow pointers,
    let fast = head
    let slow = head

    // Loop through the list with the fast and slow pointers, 
    // the fast pointer 2 positions ahead of slow pointer.
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        // If the fast and slow pointer end up meeting then we
        // return true.
        if (fast === slow) return true 
    }

    // Else always return false.
    return false
};