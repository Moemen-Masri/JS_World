function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // sorting intervals
    const merged = []; // empty array to hold the result

    for (const interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval); // If there is no overlap, the current interval is added to the merged list
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
            // update the end of the last merged interval to the larger end of the last interval and the current interval,
            // ensuring that the combined interval covers both ranges.
        }
    }
    return merged;
}

console.log(mergeIntervals([[1, 3], [2, 4], [6, 8]]));