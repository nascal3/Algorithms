var containsDuplicate = function(nums) {
    const sortedArry = nums.sort()

    const ArrLength = sortedArry.length
    for (let i = 0; i<=ArrLength; i++) {
        if (sortedArry[i] === sortedArry[i+1]) return true
    }
    return false
}

const array = [10,2,30,4,5,7,83,9,4]
containsDuplicate(array)