var minimumWindow = function(s, t) {
    // Create a map to keep count/ track of character frequency.
    let map = new Map()

    // Fill the map with frequency values of characters in string T.
    for (let letter of t) {
        if (!map.has(letter)) {
            map.set(letter, 1)
        } else {
            map.set(letter, map.get(letter) + 1)
        }
    }

    // Set up the pointers user to traverse the string.
    let left = 0
    let right = 0
    //Set the length of the minium substring found so far.
    let length = Infinity
    //Set the size of the map of the frequencies stored in the map.
    let count = map.size
    // Set the variable holding the substring found so far.
    let minWindow = ""

    // Loop through the S string
    while(right < s.length) {
        let rLetter = s[right]
        // Check if right pointer has character already in map,
        // if so reduce 'count', value by 1 and map character value by 1.
        // Move the right pointer forward.
        if (map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter) - 1)
            if (map.get(rLetter) === 0) count--
        }
        right++

        // If count has been reduced till zero (a substring has been found).
        while (count === 0) {
            // Get the substring and assign it to 'minWindow' variable.
            if(right - left < length) { 
                length = right - left
                minWindow = s.slice(left, right)
            }
            // Check if the left pointer character is already in map,
            // if so increase map character value by 1.
            // Move the left pointer forward.
            let lLetter = s[left]
            if (map.has(lLetter)) {
                map.set(lLetter, map.get(lLetter) + 1)
                if (map.get(lLetter) > 0) count++
            }
            left++
        }
    }
    // Return 'minWindow'.
    return minWindow
};

const stringS = "ADOBECODEBANC"
const stringT = "ABC"
minimumWindow(stringS, stringT)