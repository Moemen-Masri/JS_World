function firstMissingPositive(numbers) {
    // Taking only positive numbers and create a set of them
    const positiveNb = new Set();
    for (let num of numbers) {
        if (num > 0) {
            positiveNb.add(num);
        }
    }
    // Searching for the smallest missing positive number
    const n = positiveNb.size;
    for (let i = 1; i <= n + 1; i++) { // Checking from 1 to n + 1
        if (!positiveNb.has(i)) {
            return i; // Return the first missing positive integer
        }
    }
}

// Test cases
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0]));      // Output: 3