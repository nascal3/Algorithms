var groupAnagrams = function(strs) {
    const groups = {}
    const arrSize = strs.length

    // Loop through the array
    for (let i = 0; i < arrSize; i++) {
        // create key for each group in has map/object
        let key = strs[i].split('').sort().join('')
        if (!groups[key]) {
            // if key does not exist in groups, create it and add word user create the key ito the array
            groups[key] = [strs[i]]
        } else {
            // if key exist in groups, push the word into the array
            groups[key].push(strs[i])
        }
    }
    // return the values in groups hash map object
    return Object.values(groups)
};

const strs = ["eat","tea","tan","ate","nat","bat"]
groupAnagrams(strs)