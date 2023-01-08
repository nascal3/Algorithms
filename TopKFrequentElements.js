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

    // Iterate through the map (bucket index = frequency),
    //  adding values of frequency into the matching array   
    for (let key in frequencyMap) {
        bucket[frequencyMap[key]].push(key)
    }

    // loop through the bucket backwards getting only the arrays,
    //  in bucket array that the length of 'K'
    let result = []
    for (let i = bucket.length-1; i >=0 ; i--) {
        if (bucket[i].length > 0) {
            result = [...result, ...bucket[i]]
            if (result.length === k) return result
        }
    }
};

// ###### Solution using javascript maps ######
// function topKFrequent(nums, k) {
    // Create a map to store the frequency of each element in the array

    // const frequencyMap = new Map();
    // for (const num of nums) {
    //   frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    // }
  
    // Create an array of [element, frequency] pairs, then sort it by frequency in descending order

    // const sortedFrequencies = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
  
    // Return the first k elements of the sorted array
    // return sortedFrequencies.slice(0, k);
//   }
  

const nums = [4,1,-1,2,-1,2,3]
const k = 2
topKFrequent(nums, k)