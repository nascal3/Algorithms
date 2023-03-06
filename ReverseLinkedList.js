/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function(head) {
    // Set the linked list pointers
    let cur = head
    let prev = null
    let next

    // Loop through the list
    while (cur !== null) {
        // Set next point to current.next.
         next = cur.next
         // Set current.next point to previuos.
         cur.next = prev
         // Set previous to point to current.
         prev = cur
         // Set current to point to next.
         cur = next 
    }

    // Return previous
    return prev
}


const list = [1,2,3,4,5]
reverseList(list)