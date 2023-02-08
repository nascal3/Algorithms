var findMin = function(nums) {
    // Create 'left' pointer at beginning of the array &
    // 'right' at the end of the array.
    let left = 0
    let right = nums.length - 1
    

    // Loop through the array.
    while(left < right) {
        // Set 'mid' pointer to point the middle entry in the array
        let mid = Math.floor((right + left)/2)

        // Check if the element on pointer 'right' is less than element on
        // pointer 'mid'.
        if (nums[right] < nums[mid]) {
            // If it is, set 'left' pointer to 'mid' plus 1.
            left = mid+1
        } else {
            // If not set the 'right' pointer to be the 'mid' pointer.
            right = mid
        }
    }
    // Return element on pointer 'left'.
    return nums[left]
};

const number = [3,4,5,1,2]
findMin(number)