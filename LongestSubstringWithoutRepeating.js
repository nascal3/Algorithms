var lengthOfLongestSubstring = function(s) {
    // Create a counter to keep track of longest substring count.
    // Create a set (new Set()) keeps only unique numbers/entries
    let count = 0
    let set = new Set()

    // Create to pointers and set them to point to zero (first character/index of characters).
    let left = 0
    let right = 0

    // Loop (While loop) using one of the index pointers (right) to check if its lesser than the character/array length.
    while(right < s.length) {
        let letter = s[right]

        // Get the character at pointer index (right) check if its in the set.
        if (!set.has(letter)){
            // if not add it to the set.
            set.add(letter)
            // Compare between the counter and the `Set` size, assign the greater size to the counter,
            // increase the right pointer by one.   
            count = Math.max(count, set.size)
            right++
        } else {
            // If the character in the right counter(index) is already in the `Set`,
            // delete the character at left counter(index) ***character at the left counter will be same as the one found in the set***
            // & increment the left pointer by one.
            set.delete(s[left])
            left++
        }
    }

    // Return value in counter
    return count
};

const string = "abcabcbb"
lengthOfLongestSubstring(string)