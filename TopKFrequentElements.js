var topKFrequent = function(nums, k) {
    // create hash map to keep track of the frequency of each number in the array
    const frequencyMap = {}

    const numsLength = nums.length
    for (let i = 0; i < numsLength; i++) {
        frequencyMap[nums[i]] = frequencyMap[nums[i]] + 1 || 1
    }
    
    // create an array(bucket) of arrays to store the frequency to match,
    //  the index in the array
    const bucket = []
    for (let i = 0; i < numsLength + 1; i++) {
        bucket.push([])
    }

    // iterate through the map (bucket index = frequency  ),
    //  adding values of frequency into the matching array   
    for (let key in frequencyMap) {
        bucket[frequencyMap[key]].push(key)
    }

    // loop through the bucket backwards getting only the arrays,
    //  in bucket array that the lenght of 'K'
    let result = []
    for (let i = bucket.length-1; i >=0 ; i--) {
        if (bucket[i].length > 0) {
            result = [...result, ...bucket[i]]
            if (result.length === k) return result
        }
    }
};

const nums = [4,1,-1,2,-1,2,3]
const k = 2
topKFrequent(nums, k)