var threeSum = function(nums) {
    const ans = []

    // If array length is less than three return empty array
    if (nums.length < 3) return ans

    // Sort array asscending order
    nums.sort((a, b) => a - b)

    // Set array length to used to loop to - 2 so we can start from the second index position
    const numsLength = nums.length - 2

    for (let i = 0; i < numsLength; i++) {
        // Stop duplicated from occurrence by checking next value is equal to current value,
        // otherwise go loop again (ignore logic following in loop below)
        if (i > 0 && nums[i] === nums[i - 1]) continue
        // Set the other two pointers (one on the start and one on the end) of array
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            // Check if the values of the sum where the three pointers are equal to zero,
            // if so, store them in the result array created
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]])
                // Make sure next value in pointer is not a duplicate, if it is then move to next value
                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k+1]) k--
                j++
                k++
            } else if (sum < 0) {
                // If sum is less than zero increment j pointer
                j++
            } else { 
                // If sum is more than zero increment k pointer
                k-- 
            }
        }

    }
    // Return the result Array containing the result set array
    return ans
}

const numsArray = [-1,0,1,2,-1,-4]
threeSum(numsArray)
