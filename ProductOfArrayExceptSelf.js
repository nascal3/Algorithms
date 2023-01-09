var productExceptSelf = function(nums) {
    // Get array length
    const numsLength = nums.length

    // Create place holder to start calculation
    let start = 1
    // Create array to store the product calculation going forwards
    const forwardArray = []
    for (let i = 0; i < numsLength; i++) {
        forwardArray.push(start)
        // cumulatively calculation of product of forwardArray
        start = nums[i] * start
    }
    
    // Create array to store the product calculation going reverse/ to also be used for result
    let reverseArray = []
    // Create place holder to start calculation from the end
    let end = 1
    for (let i = numsLength - 1; i >= 0; i--) {
        // calculate product of reverse array and forward array adding it from the end of the array
        reverseArray.unshift(end * forwardArray[i])
        // cumulatively calculation of product of reverse array
        end = nums[i] * end
    }
    return(reverseArray)
    
};

const nums = [1,2,3,4]
productExceptSelf(nums) 