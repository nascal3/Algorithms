var longestConsecutive = function(nums) {

    // Create a set to remove all duplicates from array
    let set = new Set(nums)
     // Create tracker to keep track consecutive numbers found so far in loop
    let streak = 0

    // Loop through set
    for (let num of set) {

        // Check if there is consecutive number less than the current number
        if (set.has(num-1)) continue
        // If there is a consecutive number less than the current number,
        // Reset the tracker to keep track of current streak so far to 1
        let currentStreak = 1

        // Check if there is a consecutive number greater than the current number,
        // increase the current Streak tracker by 1 and increment the current loop number by 1
        while (set.has(num+1)) {
            currentStreak++
            num++
        }
        // Get the maximum number value current streak found and assign it to maximum streak so far,
        // if the maximumstreak is less than the currentstreak
        streak = Math.max(streak, currentStreak)
    }
    return streak
}

const nums = [9,1,4,7,3,-1,0,5,8,-1,6]
longestConsecutive(nums)