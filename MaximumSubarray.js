/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Set the maximum and current maximum to first element.
    let currMax = nums[0];
    let maxima = nums[0];

    // Loop through array elements.
    for (let i = 1; i < nums.length; i++) {
        // Compare current element in loop with sum of current maximum & current element in array.
        // Assign result to current maximum
        currMax = Math.max(nums[i], currMax + nums[i]);
        // Compare current maxima to current maximum, assign result to maxima
        maxima = Math.max(maxima, currMax);
    }
    // Return maximum
    return maxima;
};

const numsArray = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(numsArray)