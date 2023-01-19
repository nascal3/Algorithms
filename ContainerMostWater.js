var maxArea = function(height) {
    // Set the max area to zero.
    let maxArea = 0

    //Set the index pointer of the array (left at the beginning & right at the end),
    let left = 0
    let right = height.length - 1

    // Loop through the array by comparing the indices positions of left and right (left < right).
    while (left < right) {

        // Get the minimum value between the indices of the left and right,
        // multiply it by the difference between right index and left index.
        let area = Math.min(height[left], height[right]) * (right - left)

        // Check if the answer (area is greater than the maxArea value),
        // if it is greater then set it to the maxArea value.
        if (area > maxArea) maxArea = area

        // If the height value of the left index is greater than the height value of the right index,
        // increment the left index else increment the right index.
        if (height[left] < height[right]) left++; else right--
    }
    // Return the maximum area value.
    return maxArea
};

const heightArray = [1,8,6,2,5,4,8,3,7]
maxArea(heightArray)