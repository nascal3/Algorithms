var isValid = function(s) {
    // Create a array(to act as a stack) to hold the parenthesis.
    const stack = []
    // Create a map to hold the matching closing parenthesis.
    const parens = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    // Loop through the parenthesis string.
    for(let char of s) {
        // Check if the parenthesis is in the map, push the matching/closing parenthesis onto the stack/array.
        if(parens[char]) {
            stack.push(parens[char])
        } else {
            // Else if the closing parenthesis does not match the parenthesis in current loop return false
            if(stack.pop() !== char) return false
        }
    }

    // Return whether the stack is empty
    return !stack.length
};

const prest = "()[]{}"
isValid(prest)
