/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let intervalsLength = intervals.length;
  let result = [];
  let index = 0;

  while (index < intervalsLength) {
    let start = intervals[index][0];
    let end = intervals[index][1];

    let nextIndex = index + 1;

    while (nextIndex < intervalsLength && intervals[nextIndex][0] <= end) {
      end = Math.max(end, intervals[nextIndex][1]);
      nextIndex++;
    }

    result.push([start, end]);

    index = nextIndex;
  }

  return result;
};
