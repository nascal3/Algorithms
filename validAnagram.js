var isAnagram = function(s, t) {
    const arrayS = s.split('')
    const arrayT = t.split('')

    // check if the words length are the same
    if (arrayS.length !== arrayT.length) return false

    // create hashmaps/ objects to store count of characters in a word
    const sHash = {}
    const tHash = {}

    // loop through the characters in the string and create a hashmap key from the characters,
    // if it exists add a value of one to exiting value, if not assign value on one to that key
    const arrayLength = arrayS.length
    for (let i = 0; i<arrayLength; i++ ) {
        let charS = arrayS[i]
        let charT = arrayT[i]

        sHash[charS] =  sHash[charS] + 1 || 1
        tHash[charT] =  tHash[charT] + 1 || 1
    }

    // loop through the hashmap keys to compare if each key values match in both hashmaps/objects
    for (let key in sHash) {
        if (sHash[key] !== tHash[key]) return false
    }

    return true
    
};

const s = "anagram"
const t = "nagaram"

isAnagram(s, t)

// Short cut cheat bellow
// return s.split('').sort().toString() === t.split('').sort().toString()