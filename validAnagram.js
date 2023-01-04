var isAnagram = function(s, t) {
    const arrayS = s.split('')
    const arrayT = t.split('')

    if (arrayS.length !== arrayT.length) return false

    const sHash = {}
    const tHash = {}

    const arrayLength = arrayS.length
    for (let i = 0; i<arrayLength; i++ ) {
        let charS = arrayS[i]
        let charT = arrayT[i]

        sHash[charS] =  sHash[charS] + 1 || 1
        tHash[charT] =  tHash[charT] + 1 || 1
    }

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