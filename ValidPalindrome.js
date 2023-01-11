var isPalindrome = function(string) {
    // Change all characters in string to lower case
    let stringLower = string.toLowerCase()
    // Convert string an array of characters
    const stringArray = stringLower.split('')
    // Create an array of all ASCII characters
    const lettersArray = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')

    // Loop through the string array compare the characters to those in the,
    // ASCII characters array. If its valid push it onto the stack validLetters array
    const validLetters =  [] 
    for (let i = 0; i < stringArray.length; i++) {
        if (lettersArray.indexOf(stringArray[i]) !== -1) {
            validLetters.push(stringArray[i])
        }
    }

    // Convert the validLetters into a string and compare it to the validLetters,
    //  array reversed and converted into a string
    return validLetters.join('') === validLetters.reverse().join('')
};

const string = "A man, a plan, a canal: Panama"
console.log(isPalindrome(string))