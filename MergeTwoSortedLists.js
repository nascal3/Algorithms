
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
    // Create a new empty (dummy) list & also assign it to head.
    let dummy = new ListNode();
    let head = dummy

    // Loop through both list,
    while (list1 && list2) {
        // If the current value in the list1 is less than or equal to current value 
        // in the list2, assign list1 to dummy.next & vice versa.
        if (list1.val <= list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        // If the lists are null, then assign the new (dummy) list to dummy.next.
        dummy = dummy.next
    }

    // If any list still has remainig elements, append them to the end of the new list.
    if (list1) {
        dummy.next = list1
    } 
    if (list2) {
        dummy.next = list2
    }

    // Return the new list head.next
    return head.next
};

const ListNode1 = [1,2,4]
const ListNode2 = [1,3,4]
mergeTwoLists(ListNode1, ListNode2)