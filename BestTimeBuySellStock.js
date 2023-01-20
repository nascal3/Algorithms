var maxProfit = function(prices) {
    // Set current minimum price to first value(of the day) in the Array,
    // and set current maximum price to zero.
    let currentMin = prices[0]
    let currentMax = 0

    // Loop through the array of prices checking the current value in the loop is less than the minimum price,
    // and set current value to minimum price if its less than the minimum price set.
    for (let i = 0; i < prices.length; i++) {
        if (currentMin > prices[i]) currentMin = prices[i]
        // Get the difference between current price and minimum price and compare it to the maximum price,
        // and set current value to maximum price if its greater than the maximum price set
        currentMax = Math.max(currentMax, prices[i] - currentMin)
    }
    // Return the current max price
    return currentMax
};

const pricesArray = [7,6,4,3,1]
maxProfit(pricesArray)