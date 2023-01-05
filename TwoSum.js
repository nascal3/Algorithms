var twoSum = function(nums, target) {
    
    const resultMap = {}
    const arrSize = nums.length

    for (let i = 0; i < arrSize; i++) {

        let diffNum = target - nums[i]

        if ( diffNum in resultMap ) { 
            return [resultMap[diffNum] , i]
        }

        resultMap[nums[i]] = i
    }
};

let nums = [3,2,4]
let target = 7
console.log(twoSum(nums, target))