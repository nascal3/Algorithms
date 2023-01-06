var containsDuplicate = function(nums) {
    // sort the array ascending or descending order
    const sortedArry = nums.sort()

    // loop through the array and compare if the current value is equal to the next value in the array
    const ArrLength = sortedArry.length
    for (let i = 0; i<=ArrLength; i++) {
        if (sortedArry[i] === sortedArry[i+1]) return true
    }
    return false
}

const array = [10,2,30,4,5,7,83,9,4]
containsDuplicate(array)