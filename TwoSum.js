var twoSum = function(nums, target) {
    
    const resultMap = {}
    const arrSize = nums.length

    for (let i = 0; i < arrSize; i++) {
        // get difference number in order to reach target
        let diffNum = target - nums[i]

        // check if difference number (diffNum) is one of the keys in the hash map/object,
        // if it is return its value (index in array) and the current array index
        if ( diffNum in resultMap ) { 
            return [resultMap[diffNum] , i]
        }

        // if difference number (diffNum) is not found as a key in hash map/object, create instanceof,
        // assign it a value of the current index
        resultMap[nums[i]] = i
    }
};

let nums = [3,2,4]
let target = 7
console.log(twoSum(nums, target))