function longestSubarray(arr) {
    const n = arr.length;
    let maxLen = 0;

    // Iterate over each starting index of the subarray
    for (let i = 0; i < n; i++) {
        let count0 = 0;
        let count1 = 0;

        // Iterate over each ending index of the subarray
        for (let j = i; j < n; j++) {
            // Checking if the current element is 0 or 1 and update counters
            if (arr[j] === 0) {
                count0++;
            } else {
                count1++;
            }

            // Check if the counts of 0s and 1s are equal
            if (count1 === count0) {
                // Calculate the length of the current subarray
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
}
const arr = [0, 1, 1, 0, 0, 1];
console.log(longestSubarray(arr)); // Output: 6