var search = function(nums, target) {
    // Create two pointers.
    let left = 0;
    let right = nums.length - 1

    // Loop through the numbers.
    while (left <= right) {
        // Get/set the mid point index.
        let mid = left + Math.floor((right - left) / 2)
        // If the mid point is the target, return it.
        if(nums[mid] === target) {
            return mid
        }

        //Check which side is sorted, if right pointer value is greater than mid pointer value.
        if(nums[right] > nums[mid]) {
            // If the target is greater than the mid pointer value and less than or equal to right pointer value,
            // assign the left pointer to mid + one.
            // Else assign the right pointer to mid - one.
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            // If the target is less than the mid pointer value and greater than or equal to left pointer value,
            // assign the right pointer to mid - one.
            // Else assign the left pointer to mid + one.
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    // Or return -1
    return -1
};

const array = [4,5,6,7,0,1,2]
const num = 0
console.log(search(array, num))