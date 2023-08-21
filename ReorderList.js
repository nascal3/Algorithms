/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Create pointer to use for finding mid of list.
    let slow = head;
    let fast = head;
    
    // Loop through the list and find the mid of the list using the pointers.
    while (fast.next && fast.next.next) {
        slow = slow.next // Moves one point foward in each loop iteration
        fast = fast.next.next // Moves two points foward in each loop iteration
    }

    //Break linked list to two, point start of secont list to "curr"
    // and point end of first list to "null". 
    let curr = slow.next
    slow.next = null

    // Reverse second linked list.
    let prev = null
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // Combine lists, 
    let list1 = head
    let list2 = prev

    // loop through the second list and place ponters to point to the
    // appropriate lista values in alternating fashion.
    while (list2) {
        let temp = list1.next // place next node in list to temporarily storage.
        list1.next = list2 // point the next node in list1 to node in list2. 
        list1 = list2
        list2 = temp // Assign the value stored in temp storge baack to list2.
    }
};