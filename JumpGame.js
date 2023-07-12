/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Set target to the last element in the array.
    let target = nums.length - 1    

    // Loop through the elements from the last element.
    for (let i = nums.length; i>=0; i--) {
        // If the sum of the current element & the current element index is greater than or equal to the target,
        // then assign the current element index to the target.
        if (i + nums[i] >= target) {
            target = i;
        }
    }
    // Return true if the target is equal to zero.
    return target === 0;
};

const numsArray = [2,3,1,1,4]
canJump(numsArray)