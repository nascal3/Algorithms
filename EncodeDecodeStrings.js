var encodeStrings = function(stringArray) {
    // Add an encoding value to the array when joining/converting it to a string (:encodeString:)
    const encodeString = stringArray.join(':encodeString:');
    console.log(encodeString);
    dencodeStrings(encodeString)
    return encodeString;

}

var dencodeStrings = function(string) {
    // Use the string (:encodeString:) when joining/converting it back to an array
    const decodeString = string.split(':encodeString:');
    console.log(decodeString);
    return decodeString
}

const inputArray = ['lint','code','love','you']
encodeStrings(inputArray)

// dencodeStrings(string)