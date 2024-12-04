function maxProfit(prices) {
    const price = prices.length;
    let result = 0;
    let i = 0;

    while (i < price - 1) {
        // Finding Minimum price
        while (i < price - 1 && prices[i] >= prices[i + 1]) {
            i += 1;
        }
        const minPrice = prices[i];

        // Finding Maximum price
        while (i < price - 1 && prices[i] <= prices[i + 1]) {
            i += 1;
        }
        const maxPrice = prices[i];

        // Calculate profit if minPrice and maxPrice are valid
        if (minPrice < maxPrice) {
            result += maxPrice - minPrice; // adding current profit
        }
    }
    return result;
}

const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maxProfit(prices)); // Output: 865