/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  //  // Total number of intervals
  //     const n = intervals.length;

  //     // Track max valid non-overlapping subset
  //     let maxValid = 0;

  //     // Try all subsets using bitmask
  //     for (let mask = 0; mask < (1 << n); mask++) {

  //         // Build subset from mask
  //         let subset = [];
  //         for (let i = 0; i < n; i++) {
  //             if (mask & (1 << i))
  //                 subset.push(intervals[i]);
  //         }

  //         // Sort subset by start time
  //         subset.sort((a, b) => a[0] - b[0]);

  //         // Check for overlaps
  //         let valid = true;
  //         for (let i = 1; i < subset.length; i++) {
  //             if (subset[i][0] < subset[i - 1][1]) {
  //                 valid = false;
  //                 break;
  //             }
  //         }

  //         // Update max valid size
  //         if (valid)
  //             maxValid = Math.max(maxValid, subset.length);
  //     }

  //     // Return total - max valid
  //     return n - maxValid;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;

  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++;
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return count;
};
