var characterReplacement = function(s, k) {
    // Create map to keep track of characters count in string.
    let map = {}

    // Create variables to store top frequency of characters,
    // and to keep track of longest substring.
    let topFrequency = 0
    let longest = 0

    // Create variables to act as pointers in the string loop.
    let left = 0
    let right = 0

    // Loop through characters.
    while (left < s.length) {

        // Assign character to the 'right' pointer.
        let rightChar = s[right]

        // Add the right pointer character to the map and track the
        // appearance frequency.
        map[rightChar] = map[rightChar]+1 || 1
        // Compare between right character frequency and top frequency,
        // Assign the largest number to top frequency.
        topFrequency = Math.max(topFrequency, map[rightChar])


        //Check if the characters to be changed (top frequency) is more than K.
        while((right-left+1) - topFrequency > k) {
            // If it is, move left pointer to next character in the string
            // and reduce its frequency number in the map.
            let leftChar = s[left]
            map[leftChar]--
            left++
        }
        // If it is not compare between longest value set and the current longest current substring you have,
        // then reassign it to be the current longest substring value.
        longest = Math.max(longest, (right-left+1))
        // Increment the 'right' pointer counter.
        right++
    }
    // Return value in the longest substring set.
    return longest
};

const string = "ABAB"
const number = 2
characterReplacement(string, number)